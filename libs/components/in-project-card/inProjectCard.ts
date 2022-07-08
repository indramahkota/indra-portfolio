import { CommonElement } from "@in/main";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("in-project-card")
export default class InProjectCard extends CommonElement {
  // Properties
  @property({ type: String })
  title: string = "";
  @property({ type: String })
  description: string = "";

  render() {
    return html`<div class="card shadow card-height-default">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>`;
  }
}
