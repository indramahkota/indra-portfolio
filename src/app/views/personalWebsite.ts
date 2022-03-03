import { html } from "lit";
import { customElement } from "lit/decorators.js";
import CommonElement from "../../libs/components/_base_/commonElement";

import "../../libs/components/in-header/inHeader";
import "../../libs/components/in-profile/inProfile";
import "../../libs/components/in-footer/inFooter";

import "./pages/pageLanding";

@customElement("indramahkota-personal-website")
export class IndraMahkotaPersonalWebsite extends CommonElement {
  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <in-header></in-header>
      <main id="content">
        <page-landing></page-landing>
      </main>
      <in-footer></in-footer>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "indramahkota-personal-website": IndraMahkotaPersonalWebsite;
  }
}
