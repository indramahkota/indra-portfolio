import { InNavigationModel } from "@in/data/models";
import { CommonElement } from "@in/main";
import { html, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
@customElement("in-header-nav-item")
export default class InHeaderNavItem extends CommonElement {
  // Properties
  @property({ type: Object })
  navItem: InNavigationModel | undefined;

  // Methods
  @property({ type: Object })
  onNavItemClicked = () => {};

  onHashChange = (): void => {
    if (this.navItem) {
      window.location.hash == this.navItem.url
        ? (this.navItem.isActive = true)
        : (this.navItem.isActive = false);
      this.requestUpdate();
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    if (
      this.navItem &&
      (window.location.hash == this.navItem.url ||
        (window.location.hash == "" && this.navItem.url == "#/profile"))
    )
      this.navItem.isActive = true;
    window.addEventListener("hashchange", this.onHashChange, false);
  }

  disconnectedCallback(): void {
    window.removeEventListener("hashchange", this.onHashChange, false);
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    if (!this.navItem) return html`${nothing}`;
    const active = { active: this.navItem.isActive };
    return html`
      <div class="in-header-nav-item">
        <a
          href="${this.navItem.url}"
          class="d-flex justify-content-between-fixed align-items-center
           position-relative ${classMap(active)}"
          @click="${this.onNavItemClicked}"
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
