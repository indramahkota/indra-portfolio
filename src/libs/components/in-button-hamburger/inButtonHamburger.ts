import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import CommonElement from "../_base_/commonElement";

import "./inButtonHamburger.scss";

@customElement("in-button-hamburger")
export default class InButtonHamburger extends CommonElement {
  static readonly CLICK = "in-button-hamburger.click";

  @property({ type: Boolean })
  isDrawerOpen = false;

  onHamburgerClickHandler(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
    this._dispatchData(
      {
        data: {
          drawer: this.isDrawerOpen,
        },
      },
      InButtonHamburger.CLICK
    );
  }

  render(): TemplateResult {
    const buttonStyle = [
      "pe-auto",
      "ms-auto",
      "border-none",
      "background-none",
      "user-select-none",
      "text-decoration-none",
      this.isDrawerOpen ? "open" : "",
    ].join(" ");

    return html`
      <div class="in-button-hamburger">
        <button
          aria-label="Toggle Menu Button"
          class="${buttonStyle}"
          @click="${this.onHamburgerClickHandler}"
        >
          <span class="humburger"></span>
        </button>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-button-hamburger": InButtonHamburger;
  }
}
