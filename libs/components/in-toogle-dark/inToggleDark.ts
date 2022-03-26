import { CommonElement, Config, Icons, Utils } from "@in/main";
import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

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
            <img
              class="my-auto ms-1"
              src="${Icons.SUN}"
              width="18"
              height="18"
              alt="Light mode"
            />
            <img
              class="my-auto ms-1"
              src="${Icons.MOON}"
              width="18"
              height="18"
              alt="Dark mode"
            />
          </div>
        </label>
      </div>
    `;
  }
}
