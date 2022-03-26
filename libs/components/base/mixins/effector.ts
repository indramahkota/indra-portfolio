import type { Effect, Event, Store, Subscription } from "effector";
import type { LitElement } from "lit";

export interface ExtendedlitElement {
  new (): LitElement;
}

export interface effectAPI {
  [key: string]:
    | Effect<any, any, any>
    | Event<any>
    | ((i: any) => void)
    | ((i: any) => Promise<any>);
}

/**
 * Mixin to attach an Effector Store to a lit-element web-component. On store change the element will be
 * automatically updated. The store is reflected in the property `$`.
 * @param BaseClass Class inheriting from LitElement
 * @param EffectorStore Store
 * @param effectAPI Optional event/effect interface that will be injected in property `dispatch`. It must be an obect whose values are functions or effetcs.
 */
export function EffectorMxn<X, Q extends effectAPI>(
  BaseClass: ExtendedlitElement,
  EffectorStore: Store<X> | undefined,
  effectAPI: Q | undefined = undefined
) {
  return class extends BaseClass {
    /**
     * The store is copied to this property.
     */
    $: X | undefined;
    _watcherPointer: Subscription | undefined;
    _apiCopy: Q | undefined;
    _storePointer: Store<X> | undefined;

    constructor() {
      super();
      this.$ = undefined;
      this._watcherPointer = undefined;
      // @ts-ignore
      this._apiCopy = Object.assign({}, effectAPI, super.dispatch);
      this._storePointer = EffectorStore;
    }

    static get properties() {
      return { $: { attribute: false, reflect: false } };
    }

    /**
     * Getter that returns a pointer to the associated effector store
     */
    get store(): Store<X> | undefined {
      return this._storePointer;
    }

    /**
     * Getter that returns a shallow copy of the injected effect/event API
     */
    get dispatch(): Q | undefined {
      return this._apiCopy;
    }

    /**
     * Replace the store with another one and subscribes to it. If `store` is not provided it will unsubscribe
     * from the current store. Usefull during testing, in case one wants to swapp with a fake store or simply detach from it.
     * @param store new Store
     */
    replaceStore(store: Store<any> | undefined = undefined) {
      this._watcherPointer?.unsubscribe();
      this._storePointer = store;
      this.useStore();
    }

    connectedCallback() {
      super.connectedCallback();
      this.useStore();
    }

    /**
     * Subscribes to the store.
     */
    useStore() {
      this._watcherPointer = this.store?.watch(
        this.storeUpdateHandler.bind(this)
      );
      if (typeof this.store === "undefined") this.storeUpdateHandler(undefined);
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this._watcherPointer?.unsubscribe();
    }

    /**
     * Actual function that is subscribed to store chages. Call this
     * function if you want to simulate a store update.
     * @param currentState
     */
    storeUpdateHandler(currentState: X | undefined) {
      var stateCopy = this._deepCopyObject(currentState);
      this._reflectStoreToProperty(stateCopy);
      this._userReactionToStoreUpdate(stateCopy);
    }

    /**
     * Calls the user defined update function on store trigger.
     * @param current_data
     */
    _userReactionToStoreUpdate(current_data: any) {
      //@ts-ignore
      if (this.on_store_update) {
        //@ts-ignore
        this.on_store_update(current_data);
        this.requestUpdate();
      }
    }

    _reflectStoreToProperty(current_data: any) {
      this.$ = current_data;
    }

    /**
     * Does a deep copy of the provided object. Used to copy the store state.
     * @param data data to be copied
     */
    _deepCopyObject<U>(data: U): U {
      let cases = ["number", "boolean", "string", "null", "undefined"];
      if (cases.includes(typeof data)) return data;

      var copy: any = {};
      for (const [key, value] of Object.entries(data)) {
        if (cases.includes(typeof value)) {
          copy[key] = value;
        } else if (typeof value === "object") {
          copy[key] = JSON.parse(JSON.stringify(value));
        }
      }
      return copy;
    }
  };
}
