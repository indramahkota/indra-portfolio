import { InNavigationModel } from "@in/data/models";
import { CommonElement } from "@in/main";
import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("in-header-nav")
export default class InHeaderNav extends CommonElement {
  // Properties
  @property({ type: Array })
  navData: InNavigationModel[] = [];
  @property({ type: Boolean })
  isDrawerOpen = false;

  // Methods
  @property({ type: Object })
  onNavItemClicked = () => {};

  render(): TemplateResult {
    const open = { open: this.isDrawerOpen };
    return html`
      <div class="in-header-nav">
        <nav class="${classMap(open)}">
          <ul class="p-0">
            ${repeat(
              this.navData,
              (nav) => html`<li>
                <in-header-nav-item
                  .navItem=${nav}
                  .onNavItemClicked=${this.onNavItemClicked}
                ></in-header-nav-item>
              </li>`
            )}
          </ul>
        </nav>
      </div>
    `;
  }
}
