import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import CommonElement from "../base/commonElement";

@customElement("in-header-logo")
export default class InHeaderLogo extends CommonElement {
  // Properties
  @property({ type: String })
  title = "";

  render(): TemplateResult {
    return html`
      <div>
        <a class="fs-5 f-pacifico text-decoration-none text-default" href="/">
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
