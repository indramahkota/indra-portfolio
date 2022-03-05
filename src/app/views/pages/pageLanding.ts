import CommonElement from "@in/base/commonElement";
import "@in/in-profile/inProfile";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import AppConfig from "../../../data/myConfig";

@customElement("page-landing")
export class LandingPage extends CommonElement {
  render() {
    return html`<in-profile
      .user=${AppConfig.STATIC_USER}
      .socialMedia=${AppConfig.APP_SOCIAL_MEDIA}
    ></in-profile>`;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "page-landing": LandingPage;
  }
}
