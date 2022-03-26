import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import CommonElement from "../base/commonElement";

@customElement("in-toggle-dark")
export default class InToggleDark extends CommonElement {
  // Properties
  @property({ type: Boolean })
  darkMode = false;

  // Methods
  @property({ type: Object })
  onToggleDark = (_checked: boolean) => {};

  onSwitchChangeHandler(event: Event): void {
    const path = event.composedPath();
    const input = path[0] as HTMLInputElement;
    this.onToggleDark(input.checked);
  }

  render(): TemplateResult {
    return html`
      <div class="in-toggle-dark">
        <label
          class="in-toggle-label position-relative d-flex align-items-center justify-content-between"
        >
          <input
            aria-label="This input for Toggle Dark or Light Mode"
            @change=${this.onSwitchChangeHandler}
            type="checkbox"
            ?checked=${!this.darkMode}
          />
          <span class="slider round"></span>
          <div
            class="in-toggle-icon d-flex justify-content-between position-absolute"
          >
            <i class="fas fa-sun"></i>
            <i class="fas fa-moon"></i>
          </div>
        </label>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-toggle-dark": InToggleDark;
  }
}
