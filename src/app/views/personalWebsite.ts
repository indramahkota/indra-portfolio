import CommonElement from "@in/base/commonElement";
import "@in/in-footer/inFooter";
import "@in/in-header/inHeader";
import InHeader from "@in/in-header/inHeader";
import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import AppConfig from "../../data/myConfig";
import Utils from "../utils/Utils";
import "./pages/pageLanding";

@customElement("indramahkota-personal-website")
export class PersonalWebsite extends CommonElement {
  @state()
  _isDarkMode: boolean;

  @state()
  _isDrawerOpen: boolean;

  constructor() {
    super();
    if (Utils.getLCS(AppConfig.LCS_THEME) === "dark") {
      window.document.body.classList.add("dark");
      this._isDarkMode = true;
    } else {
      window.document.body.classList.remove("dark");
      this._isDarkMode = false;
    }

    if (Utils.getLCS(AppConfig.LCS_DRAWER) === "open")
      this._isDrawerOpen = true;
    else this._isDrawerOpen = false;
  }

  onDrawerChangeHandler(event: Event): void {
    const details = (event as CustomEvent).detail;
    if (details.data.drawer === undefined) return;
    if (details.data.drawer) Utils.setLCS(AppConfig.LCS_DRAWER, "open");
    else Utils.setLCS(AppConfig.LCS_DRAWER, "close");
  }

  onToggleDarkChangeHandler(event: Event): void {
    const details = (event as CustomEvent).detail;
    if (details.data.toggle === undefined) return;
    if (details.data.toggle) {
      window.document.body.classList.remove("dark");
      Utils.setLCS(AppConfig.LCS_THEME, "light");
      this._isDarkMode = true;
    } else {
      window.document.body.classList.add("dark");
      Utils.setLCS(AppConfig.LCS_THEME, "dark");
      this._isDarkMode = false;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(
      InHeader.DRAWER_CHANGE,
      this.onDrawerChangeHandler,
      false
    );
    this.addEventListener(
      InHeader.TOGGLE_DARK_CHANGE,
      this.onToggleDarkChangeHandler,
      false
    );
  }

  disconnectedCallback(): void {
    this.removeEventListener(
      InHeader.DRAWER_CHANGE,
      this.onDrawerChangeHandler,
      false
    );
    this.removeEventListener(
      InHeader.TOGGLE_DARK_CHANGE,
      this.onToggleDarkChangeHandler,
      false
    );
    super.disconnectedCallback();
  }

  render() {
    return html`
      <in-header
        title=${AppConfig.APP_NAME}
        ?supportDarkMode=${true}
        .navData=${AppConfig.APP_NAVIGATION}
        ?lightMode=${this._isDarkMode}
        ?isDrawerOpen=${this._isDrawerOpen}
      ></in-header>
      <main id="content">
        <page-landing></page-landing>
      </main>
      <in-footer text=${AppConfig.TEXT_FOOTER}></in-footer>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "indramahkota-personal-website": PersonalWebsite;
  }
}
