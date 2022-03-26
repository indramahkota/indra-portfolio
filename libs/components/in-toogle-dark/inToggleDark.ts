import Config from "@in/base/utils/Config";
import Utils from "@in/base/utils/Utils";
import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import CommonElement from "../base/commonElement";

@customElement("in-toggle-dark")
export default class InToggleDark extends CommonElement {
  // Properties
  @property({ type: Boolean })
  darkMode = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (Utils.getLCS(Config.LCS_THEME) === "dark") {
      window.document.body.classList.add("dark");
      this.darkMode = true;
    } else {
      window.document.body.classList.remove("dark");
      this.darkMode = false;
    }
  }

  onSwitchChangeHandler(event: Event): void {
    const path = event.composedPath();
    const input = path[0] as HTMLInputElement;
    if (input.checked) {
      window.document.body.classList.remove("dark");
      Utils.setLCS(Config.LCS_THEME, "light");
      this.darkMode = true;
    } else {
      window.document.body.classList.add("dark");
      Utils.setLCS(Config.LCS_THEME, "dark");
      this.darkMode = false;
    }
  }

  render(): TemplateResult {
    return html`
      <div class="in-toggle-dark">
        <label
          class="in-toggle-label position-relative
            d-flex align-items-center justify-content-between"
        >
          <input
            aria-label="This input for Toggle Dark or Light Mode"
            @change=${this.onSwitchChangeHandler}
            type="checkbox"
            ?checked=${!this.darkMode}
          />
          <span class="slider round"></span>
          <div
            class="in-toggle-icon d-flex justify-content-between
              position-absolute"
          >
            <i class="fas fa-sun my-auto ms-1"></i>
            <i class="fas fa-moon my-auto me-1"></i>
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
