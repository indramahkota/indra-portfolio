import { LitElement } from "lit";

export default abstract class CommonElement extends LitElement {
  onAlert(message: string) {
    window.alert(message);
  }

  createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected _dispatchData<T>(data: T, event: string): void {
    this.dispatchEvent(
      new CustomEvent(event, {
        detail: data,
        bubbles: true,
      })
    );
  }
}
