import CommonElement from "@in/base/commonElement";
import { Card } from "@in/base/mixins/cardMixin";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("in-greeting")
export class InGreeting extends Card(CommonElement) {
  // Properties
  @property({ type: String })
  greeting = "";
  @property({ type: String })
  description = "";

  render() {
    return this.renderCard(html`
      <div class="card-body text-center text-md-start">
        <h3 class="card-title">
          ${this.greeting} <span class="wave-emoji">👋</span>
        </h3>
        <p class="card-text">${this.description}</p>
      </div>
    `);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-greeting": InGreeting;
  }
}
