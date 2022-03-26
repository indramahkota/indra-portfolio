import { CommonElement } from "@in/main";
import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("in-footer")
export default class InFooter extends CommonElement {
  // Properties
  @property({ type: String })
  text = "";

  render(): TemplateResult {
    return html`
      <div class="in-footer p-3 mt-5 text-center text-default divider-top">
        <footer class="w-100">
          <p tabindex="0">${this.text}</p>
        </footer>
      </div>
    `;
  }
}
