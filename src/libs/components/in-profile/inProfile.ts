import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import AppConfig from "../../../data/Config";
import CommonElement from "../_base_/commonElement";

import "./inFooter.scss";

@customElement("in-profile")
export default class InProfile extends CommonElement {
  @property({ type: String })
  text = AppConfig.TEXT_FOOTER;

  render(): TemplateResult {
    return html`
      
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-profile": InProfile;
  }
}
