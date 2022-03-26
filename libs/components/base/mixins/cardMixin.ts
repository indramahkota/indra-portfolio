import { html, TemplateResult } from "lit";
import { property } from "lit/decorators";
import CommonElement from "../commonElement";

type Constructor<T> = new (...args: any[]) => T;

export declare class CardInterface {
  renderCard(content: TemplateResult): TemplateResult;
}

export const Card = <T extends Constructor<CommonElement>>(superClass: T) => {
  class CardElement extends superClass {
    @property({ type: Number })
    radius = 0.0;

    renderCard(content: TemplateResult): TemplateResult {
      return html` <div>${content}</div>`;
    }
  }

  return CardElement as Constructor<CardInterface> & T;
};
