import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import CommonElement from "../_base_/commonElement";

import "./inFooter.scss";

@customElement("in-footer")
export default class InFooter extends CommonElement {
  @property({ type: String })
  text = "";

  render(): TemplateResult {
    return html`
      <div class="in-footer">
        <footer>
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
