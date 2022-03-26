import { CommonElement } from "@in/main";
import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

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
