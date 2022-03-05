import { html, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import CommonElement from "../_base_/commonElement";
import { InSocialMediaModel, InUserModel } from "../../data/model/models";

import "../in-social-media/inSocialMedia";
import "./inProfile.scss";

@customElement("in-profile")
export default class InProfile extends CommonElement {
  @property({ type: String })
  title = "PROFILE";

  @property({ type: Object })
  user: InUserModel | undefined;

  @property({ type: Array })
  socialMedia: InSocialMediaModel[] = [];

  render(): TemplateResult {
    if (!this.user) return html`${nothing}`;
    return html`
      <div class="in-profile">
        <div class="in-profile-main">
          <div class="in-profile-content">
            <div class="in-profile-details">
              <h2 tabindex="0" class="in-profile-name">${this.user.name}</h2>
              <div class="in-profile-location">
                <i class="fas fa-map-marker-alt"></i>
                <span tabindex="0">${this.user.location}</span>
              </div>
              <div class="in-profile-hirable">
                <p tabindex="0">${this.user.status}</p>
              </div>
              <div class="in-profile-media-social">
                <in-social-media
                  .socialMedia=${this.socialMedia}
                ></in-social-media>
              </div>
            </div>
            <div class="in-profile-image-container">
              <img
                width="200"
                height="200"
                class="in-profile-image"
                src="${this.user.image}"
                alt="Indra Mahkota, Developer who build this website"
              />
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-profile": InProfile;
  }
}
