import { LitElement } from "lit";

export default abstract class CommonElement extends LitElement {
  createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}
