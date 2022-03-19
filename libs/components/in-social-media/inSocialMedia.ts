import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { InSocialMediaModel } from "../../data/model/models";
import CommonElement from "../base/commonElement";
import "./inSocialMedia.scss";

@customElement("in-social-media")
export default class InSocialMedia extends CommonElement {
  @property({ type: Array })
  socialMedia: InSocialMediaModel[] = [];

  renderSocialMediaButton(data: InSocialMediaModel): TemplateResult {
    return html`
      <li>
        <a
          style="background-color: ${data.color}"
          aria-label="This is the ${data.isEmail
            ? "Email"
            : "Social media page"} who created this website."
          href="${data.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="${data.icon}"></i>
        </a>
      </li>
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="in-social-media">
        <ul>
          ${this.socialMedia.map((sm) => this.renderSocialMediaButton(sm))}
        </ul>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-social-media": InSocialMedia;
  }
}
