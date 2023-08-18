import { Card, CommonElement } from "@in/main";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("in-greeting")
export default class InGreeting extends Card(CommonElement) {
  // Properties
  @property({ type: String })
  greeting = "";
  @property({ type: String })
  description = "";

  render() {
    return this.renderCard(html`
      <div class="card-body text-center text-md-start">
        <h2 class="card-title">
          ${this.greeting} <span class="wave-emoji">👋</span>
        </h2>
        <p class="card-text" style="line-height: 20pt;">${this.description}</p>
      </div>
    `);
  }
}
