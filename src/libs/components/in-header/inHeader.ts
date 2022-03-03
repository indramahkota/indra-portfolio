import { html, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import AppConfig from "../../../data/Config";
import Utils from "../../utils/Utils";
import ScrollElement from "../_base_/scrollElement";
import InButtonHamburger from "../in-button-hamburger/inButtonHamburger";
import InHeaderNavItem from "../in-header-nav-item/inHeaderNavItem";

import "../in-button-hamburger/inButtonHamburger";
import "../in-header-logo/inHeaderLogo";
import "../in-header-nav/inHeaderNav";
import "../in-toogle-dark/inToggleDark";

import "./inHeader.scss";

@customElement("in-header")
export default class InHeader extends ScrollElement {
  @property({ type: Boolean })
  isDrawerOpen = false;

  @property({ type: Boolean })
  isShow = true;

  @property({ type: Boolean })
  supportDarkMode = AppConfig.SUPPORT_DARK_MODE;

  onScrollHandler(): void {
    if (this.currScrollPosition < 120) {
      this.isShow = true;
      return;
    }
    const scrollPositionDx = this.getScrollPositionDx();
    if (scrollPositionDx > 0) {
      this.isDrawerOpen = false;
      Utils.setLCS(AppConfig.LCS_DRAWER, "close");
      this.isShow = false;
    } else if (scrollPositionDx < -10) this.isShow = true;
  }

  onResizeHandler = (): void => {
    this.onScrollHandler();
    this.isDrawerOpen = false;
    Utils.setLCS(AppConfig.LCS_DRAWER, "close");
  };

  onDrawerChangeHandler(event: Event): void {
    const details = (event as CustomEvent).detail;
    if (details.data.drawer === undefined) return;
    this.isDrawerOpen = details.data.drawer;
    if (this.isDrawerOpen) Utils.setLCS(AppConfig.LCS_DRAWER, "open");
    else Utils.setLCS(AppConfig.LCS_DRAWER, "close");
    this.querySelector("in-header-nav")?.requestUpdate();
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (Utils.getLCS(AppConfig.LCS_DRAWER) === "open") this.isDrawerOpen = true;
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
    window.removeEventListener("resize", this.onResizeHandler, false);
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    const inHeaderSTyle = [
      "container-fluid",
      "position-fixed",
      "d-flex",
      "align-items-center",
      "p-2",
      !this.isShow ? "hide" : "",
    ].join(" ");

    const headerStyle = [
      "d-flex",
      "align-items-center",
      "w-100",
      "my-auto",
      "mx-auto",
      "ps-3",
      "pe-2",
    ].join(" ");

    return html`
      <div class="in-header ${inHeaderSTyle}">
        <header class="header ${headerStyle}">
          <in-header-logo></in-header-logo>

          ${this.supportDarkMode
            ? html`<in-toggle-dark class="ms-auto"></in-toggle-dark>`
            : nothing}

          <in-button-hamburger
            class="ms-auto"
            ?isdraweropen=${this.isDrawerOpen}
          ></in-button-hamburger>

          <in-header-nav ?isdraweropen=${this.isDrawerOpen}></in-header-nav>
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
