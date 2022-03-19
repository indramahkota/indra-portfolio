import { html, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { InNavigationModel } from "../../data/model/models";
import CommonElement from "../base/commonElement";
import "./inHeaderNavItem.scss";

@customElement("in-header-nav-item")
export default class InHeaderNavItem extends CommonElement {
  static readonly CLICK = "in-header-nav-item.click";

  @property({ type: Object })
  navItem: InNavigationModel | undefined;

  onNavItemClickHandler(): void {
    this._dispatchData(
      {
        data: {
          url: this.navItem?.url,
          drawer: false,
        },
      },
      InHeaderNavItem.CLICK
    );
  }

  render(): TemplateResult {
    if (!this.navItem) return html`${nothing}`;
    const active = { open: this.navItem.isActive };
    return html`
      <div class="in-header-nav-item">
        <a
          href="${this.navItem.url}"
          class="d-flex justify-content-between-fixed align-items-center position-relative ${classMap(
            active
          )}"
          @click="${this.onNavItemClickHandler}"
        >
          ${!this.navItem.imageUrl
            ? nothing
            : html`<img
                src="${this.navItem.imageUrl}"
                alt="${ifDefined(this.navItem.imageAlt)}"
              />`}
          <p>${this.navItem?.name}</p>
          <span class="chevron"></span>
        </a>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-header-nav-item": InHeaderNavItem;
  }
}
