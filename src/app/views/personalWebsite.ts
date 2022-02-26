import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "../../libs/components/in-header/inHeader";

@customElement("indramahkota-personal-website")
export class IndraMahkotaPersonalWebsite extends LitElement {
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
    return html`<in-header></in-header>`;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "indramahkota-personal-website": IndraMahkotaPersonalWebsite;
  }
}
