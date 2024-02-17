import { LitElement } from "lit";

export default class CommonElement extends LitElement {
  createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
}
