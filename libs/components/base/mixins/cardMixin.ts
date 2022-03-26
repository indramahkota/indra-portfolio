import { html, TemplateResult } from "lit";
import CommonElement from "../commonElement";

type Constructor<T> = new (...args: any[]) => T;

export declare class CardInterface {
  renderCard(content: TemplateResult): TemplateResult;
}

export const Card = <T extends Constructor<CommonElement>>(superClass: T) => {
  class CardElement extends superClass {
    renderCard(content: TemplateResult): TemplateResult {
      return html`<div
        class="card m-3 p-2 mx-lg-auto shadow bg-default
            text-default width-default"
      >
        ${content}
      </div>`;
    }
  }

  return CardElement as Constructor<CardInterface> & T;
};
