import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import AppConfig from "../../../data/Config";
import CommonElement from "../_base_/commonElement";

import "./inHeaderLogo.scss";

@customElement("in-header-logo")
export default class InHeaderLogo extends CommonElement {
  @property({ type: String })
  title = AppConfig.APP_NAME;

  render(): TemplateResult {
    return html`
      <div class="in-header-logo">
        <a href="/">${this.title}</a>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-header-logo": InHeaderLogo;
  }
}
