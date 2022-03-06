import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import CommonElement from "../base/commonElement";
import "./inToggleDark.scss";

@customElement("in-toggle-dark")
export default class InToggleDark extends CommonElement {
  static readonly CLICK = "in-button-hamburger.click";

  @property({ type: Boolean })
  lightMode = false;

  onSwitchChangeHandler(event: Event): void {
    const path = event.composedPath();
    const input = path[0] as HTMLInputElement;
    this._dispatchData(
      {
        data: {
          toggle: input.checked,
        },
      },
      InToggleDark.CLICK
    );
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
            ?checked=${!this.lightMode}
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
