import { CommonElement } from "@in/main";
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
