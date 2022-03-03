import { html } from "lit";
import { customElement } from "lit/decorators.js";
import CommonElement from "../../../libs/components/_base_/commonElement";

import "../../../libs/components/in-profile/inProfile";

@customElement("page-landing")
export class Landing extends CommonElement {
  /* Display flex align items center tidak mengizinkan child div width 100% */
  /* Basis display [container -> main -> content -> item] */
  render() {
    return html`<in-profile></in-profile>`;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "page-landing": Landing;
  }
}
