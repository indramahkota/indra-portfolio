import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import CommonElement from "../base/commonElement";
import "./inHeaderLogo.scss";

@customElement("in-header-logo")
export default class InHeaderLogo extends CommonElement {
  @property({ type: String })
  title = "";

  render(): TemplateResult {
    return html`
      <div class="in-header-logo">
        <a
          class="fs-5 f-pacifico text-decoration-none default-text-color"
          href="/"
        >
          ${this.title}
        </a>
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
