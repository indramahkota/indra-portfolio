import { Card } from "@in/base/mixins/cardMixin";
import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { InSocialMediaModel, InUserModel } from "../../data/model/models";
import CommonElement from "../base/commonElement";
import "../in-social-media/inSocialMedia";

@customElement("in-profile")
export default class InProfile extends Card(CommonElement) {
  // Properties
  @property({ type: Object })
  user: InUserModel | undefined;
  @property({ type: Array })
  socialMedia: InSocialMediaModel[] = [];

  render() {
    if (!this.user) return html`${nothing}`;
    return this.renderCard(html`<div class="row g-0">
      <div class="col-md-4 order-md-last p-3 d-flex">
        <img
          src="${this.user.image}"
          class="rounded-circle border-profile mx-auto me-md-0"
          alt="${this.user.name}"
          width="200px"
          height="200px"
        />
      </div>
      <div class="col-md-8 order-md-first d-flex">
        <div class="card-body text-center text-md-start">
          <h2 tabindex="0">${this.user.name}</h2>
          <div class="mt-2">
            <i class="fas fa-map-marker-alt"></i>
            <span tabindex="0">${this.user.location}</span>
          </div>
          <p tabindex="0" class="mt-2">${this.user.status}</p>
          <in-social-media .socialMedia=${this.socialMedia}></in-social-media>
        </div>
      </div>
    </div>`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-profile": InProfile;
  }
}
