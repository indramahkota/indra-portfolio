import CommonElement from "@in/base/commonElement";
import "@in/in-footer/inFooter";
import "@in/in-header/inHeader";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import AppConfig from "../../data/myConfig";
import "./pages/pageLanding";

@customElement("indramahkota-personal-website")
export class PersonalWebsite extends CommonElement {
  render() {
    return html`
      <in-header
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
