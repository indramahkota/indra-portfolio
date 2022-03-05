import "../../../libs/components/in-footer/inFooter";
import "../../../libs/components/in-header/inHeader";

import { html } from "lit";
import { customElement } from "lit/decorators.js";
import CommonElement from "../../../libs/components/_base_/commonElement";

import "./pages/pageLanding";
import AppConfig from "../../data/myConfig";
import InHeader from "../../../libs/components/in-header/inHeader";
import Utils from "../utils/Utils";

@customElement("indramahkota-personal-website")
export class PersonalWebsite extends CommonElement {
  onDrawerChangeHandler(event: Event): void {
    const details = (event as CustomEvent).detail;
    if (details.data.drawer === undefined) return;
    if (details.data.drawer) Utils.setLCS(AppConfig.LCS_DRAWER, "open");
    else Utils.setLCS(AppConfig.LCS_DRAWER, "close");
    this.querySelector("in-header-nav")?.requestUpdate();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(
      InHeader.DRAWER_CHANGE,
      this.onDrawerChangeHandler,
      false
    );
  }

  disconnectedCallback(): void {
    this.removeEventListener(
      InHeader.DRAWER_CHANGE,
      this.onDrawerChangeHandler,
      false
    );
    super.disconnectedCallback();
  }

  render() {
    return html`
      <in-header
        ?supportDarkMode=${true}
        title=${AppConfig.APP_NAME}
        .navData=${AppConfig.APP_NAVIGATION}
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
