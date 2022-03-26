import { CommonElement } from "@in/main";
import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("in-button-hamburger")
export default class InButtonHamburger extends CommonElement {
  // Properties
  @property({ type: Boolean })
  isDrawerOpen = false;

  // Methods
  @property({ type: Object })
  onHamburgerClick = (_open: boolean) => {};

  onHamburgerClickHandler(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.onHamburgerClick(this.isDrawerOpen);
  }

  render(): TemplateResult {
    const open = { open: this.isDrawerOpen };
    return html`
      <div class="in-button-hamburger">
        <button
          class="pe-auto ms-auto border-none background-none
          user-select-none text-decoration-none ${classMap(open)}"
          aria-label="Toggle Menu Button"
          @click="${this.onHamburgerClickHandler}"
        >
          <span class="humburger"></span>
        </button>
      </div>
    `;
  }
}
