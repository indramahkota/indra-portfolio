import CommonElement from "@in/base/commonElement";
import "@in/in-footer/inFooter";
import "@in/in-header/inHeader";
import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import AppConfig from "../../data/myConfig";
import Utils from "../utils/Utils";
import "./pages/pageLanding";

@customElement("indramahkota-personal-website")
export class PersonalWebsite extends CommonElement {
  @state()
  _isDarkMode = false;

  @state()
  _isDrawerOpen = false;

  onDrawerChange(open: boolean): void {
    this._isDrawerOpen = open;
    if (open) Utils.setLCS(AppConfig.LCS_DRAWER, "open");
    else Utils.setLCS(AppConfig.LCS_DRAWER, "close");
  }

  onToggleDark(checked: boolean): void {
    if (checked) {
      window.document.body.classList.remove("dark");
      Utils.setLCS(AppConfig.LCS_THEME, "light");
      this._isDarkMode = true;
    } else {
      window.document.body.classList.add("dark");
      Utils.setLCS(AppConfig.LCS_THEME, "dark");
      this._isDarkMode = false;
    }
  }

  render() {
    return html`
      <in-header
        title=${AppConfig.APP_NAME}
        .navData=${AppConfig.APP_NAVIGATION}
        ?darkMode=${this._isDarkMode}
        ?isDrawerOpen=${this._isDrawerOpen}
        .onToggleDark=${this.onToggleDark}
        .onDrawerChange=${this.onDrawerChange}
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
