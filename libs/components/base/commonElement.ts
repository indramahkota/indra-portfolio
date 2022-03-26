import { LitElement } from "lit";

export default class CommonElement extends LitElement {
  createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}
