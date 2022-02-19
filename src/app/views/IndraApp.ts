import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("indra-app")
export class IndraApp extends LitElement {
  createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <h1>
        Hello, World!
      </h1>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "indra-app": IndraApp;
  }
}
