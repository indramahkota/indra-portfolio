import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import CommonElement from "../base/commonElement";

@customElement("in-footer")
export default class InFooter extends CommonElement {
  // Properties
  @property({ type: String })
  text = "";

  render(): TemplateResult {
    return html`
      <div class="in-footer p-3 mt-3 text-center text-default divider-top">
        <footer class="w-100">
          <p tabindex="0">${this.text}</p>
        </footer>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-footer": InFooter;
  }
}
