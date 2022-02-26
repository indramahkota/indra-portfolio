import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import AppConfig from "../../../data/Config";
import CommonElement from "../_base_/commonElement";
import Utils from "../../utils/Utils";

import "./inToggleDark.scss";

@customElement("in-toggle-dark")
export default class InToggleDark extends CommonElement {
  @property({ type: Boolean })
  isThemeLight = true;

  @property({ type: Boolean })
  darkMode = AppConfig.SUPPORT_DARK_MODE;

  onSwitchChangeHandler(event: Event): void {
    const path = event.composedPath();
    const input = path[0] as HTMLInputElement;
    if (input.checked) {
      window.document.body.classList.remove("dark");
      Utils.setLCS(AppConfig.LCS_THEME, "light");
    } else {
      window.document.body.classList.add("dark");
      Utils.setLCS(AppConfig.LCS_THEME, "dark");
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (Utils.getLCS(AppConfig.LCS_THEME) === "dark") this.isThemeLight = false;
  }

  render(): TemplateResult {
    return html`
      <div class="in-toggle-dark">
        <label
          class="in-toggle-label position-relative d-flex align-items-center justify-content-between"
        >
          <input
            aria-label="This input for Toggle Dark or Light Mode"
            @change="${this.onSwitchChangeHandler}"
            type="checkbox"
            ?checked=${this.isThemeLight}
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
