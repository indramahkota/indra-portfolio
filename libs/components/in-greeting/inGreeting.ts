import CommonElement from "@in/base/commonElement";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./inGreeting.scss";

@customElement("in-greeting")
export class InGreeting extends CommonElement {
  // Properties
  @property({ type: String })
  greeting = "";
  @property({ type: String })
  description = "";

  render() {
    return html`
            <div class="in-greeting-container" id="greeting">
                <div class="in-greeting-main">
                    <h1 class="in-greeting-text">
                        ${this.greeting}
                        <span class="wave-emoji">👋</span>
                    </h1>
                    <p class="in-greeting-text in-greeting-desc">${this.description}</p>
                    </div>
                </div>
            </div>
        `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-greeting": InGreeting;
  }
}
