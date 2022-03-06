import { html, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { InNavigationModel } from "../../data/model/models";
import ScrollElement from "../base/scrollElement";
import "../in-button-hamburger/inButtonHamburger";
import InButtonHamburger from "../in-button-hamburger/inButtonHamburger";
import "../in-header-logo/inHeaderLogo";
import InHeaderNavItem from "../in-header-nav-item/inHeaderNavItem";
import "../in-header-nav/inHeaderNav";
import "../in-toogle-dark/inToggleDark";
import InToggleDark from "../in-toogle-dark/inToggleDark";
import "./inHeader.scss";

@customElement("in-header")
export default class InHeader extends ScrollElement {
  static readonly DRAWER_CHANGE = "in-header.drawer_change";
  static readonly TOGGLE_DARK_CHANGE = "in-header.toggle_dark_change";

  @property({ type: String })
  title = "";

  @property({ type: Array })
  navData: InNavigationModel[] = [];

  @property({ type: Boolean })
  isShow = true;

  @property({ type: Boolean })
  isDrawerOpen = false;

  @property({ type: Boolean })
  lightMode = false;

  @property({ type: Boolean })
  supportDarkMode = false;

  onScrollHandler(): void {
    if (this.currScrollPosition < 120) {
      this.isShow = true;
      return;
    }
    const scrollPositionDx = this.getScrollPositionDx();
    if (scrollPositionDx > 0) {
      this.isShow = false;
      this.dispatchDrawerState(false);
    } else if (scrollPositionDx < -10) this.isShow = true;
  }

  dispatchDrawerState(state: boolean) {
    this.isDrawerOpen = state;
    this._dispatchData(
      {
        data: {
          drawer: state,
        },
      },
      InHeader.DRAWER_CHANGE
    );
  }

  dispatchToggleDarkState(state: boolean) {
    this.lightMode = state;
    this._dispatchData(
      {
        data: {
          toggle: state,
        },
      },
      InHeader.TOGGLE_DARK_CHANGE
    );
  }

  onResizeHandler = (): void => {
    this.onScrollHandler();
    this.dispatchDrawerState(false);
  };

  onDrawerChangeHandler(event: Event): void {
    const details = (event as CustomEvent).detail;
    if (details.data.drawer === undefined) return;
    this.dispatchDrawerState(details.data.drawer);
  }

  onToggleDarkChangeHandler(event: Event): void {
    const details = (event as CustomEvent).detail;
    if (details.data.toggle === undefined) return;
    this.dispatchToggleDarkState(details.data.toggle);
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("resize", this.onResizeHandler, false);
    this.addEventListener(
      InButtonHamburger.CLICK,
      this.onDrawerChangeHandler,
      false
    );
    this.addEventListener(
      InHeaderNavItem.CLICK,
      this.onDrawerChangeHandler,
      false
    );
    this.addEventListener(
      InToggleDark.CLICK,
      this.onToggleDarkChangeHandler,
      false
    );
  }

  disconnectedCallback(): void {
    this.removeEventListener(
      InButtonHamburger.CLICK,
      this.onDrawerChangeHandler,
      false
    );
    this.removeEventListener(
      InHeaderNavItem.CLICK,
      this.onDrawerChangeHandler,
      false
    );
    this.removeEventListener(
      InToggleDark.CLICK,
      this.onToggleDarkChangeHandler,
      false
    );
    window.removeEventListener("resize", this.onResizeHandler, false);
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    const hide = { open: this.isDrawerOpen };
    return html`
      <div
        class="in-header container-fluid position-fixed d-flex align-items-center p-2 ${classMap(
          hide
        )}"
      >
        <header
          class="header d-flex align-items-center w-100 my-auto mx-auto ps-3 pe-2"
        >
          <in-header-logo title=${this.title}></in-header-logo>

          ${this.supportDarkMode
            ? html`<in-toggle-dark
                ?lightMode=${this.lightMode}
                class="ms-auto"
              ></in-toggle-dark>`
            : nothing}

          <in-button-hamburger
            class="ms-auto"
            ?isdraweropen=${this.isDrawerOpen}
          ></in-button-hamburger>

          <in-header-nav
            ?isdraweropen=${this.isDrawerOpen}
            .navData=${this.navData}
          ></in-header-nav>
        </header>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-header": InHeader;
  }
}
