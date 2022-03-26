import { InSocialMediaModel } from "@in/data/models";
import { CommonElement } from "@in/main";
import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("in-social-media")
export default class InSocialMedia extends CommonElement {
  // Properties
  @property({ type: Array })
  socialMedia: InSocialMediaModel[] = [];

  renderSocialMedia(data: InSocialMediaModel): TemplateResult {
    return html`
      <li class="line-style-none m-1">
        <a
          style="background-color: ${data.color}; width: 2em; height: 2em;"
          aria-label="This is the ${data.isEmail
            ? "Email"
            : "Social media page"} who created this website."
          href="${data.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="d-flex rounded-circle fs-4 text-decoration-none"
        >
          <i
            class="${data.icon} m-auto rounded-circle hover-black
                d-flex align-items-center justify-content-center"
            style="color: white; width: 2em; height: 2em;"
          ></i>
        </a>
      </li>
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="d-flex fs-3 mt-2">
        <ul class="d-flex flex-row mx-auto ms-md-0">
          ${this.socialMedia.map((sm) => this.renderSocialMedia(sm))}
        </ul>
      </div>
    `;
  }
}
