import { InNavigationModel } from "@in/data/models";
import { Config, ScrollElement, Utils } from "@in/main";
import { html, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("in-header")
export default class InHeader extends ScrollElement {
  // Properties
  @property({ type: String })
  title = "My Portfolio";
  @property({ type: Array })
  navData: InNavigationModel[] = [];
  @property({ type: Boolean })
  isShow = true;
  @property({ type: Boolean })
  isDrawerOpen = false;
  @property({ type: Boolean })
  darkMode = false;
  @property({ type: Boolean })
  supportDarkMode = true;

  onScrollHandler(): void {
    if (this.currScrollPosition < 120) {
      this.isShow = true;
      return;
    }
    const scrollPositionDx = this.getScrollPositionDx();
    if (scrollPositionDx > 0) {
      this.isShow = false;
      this.onDrawerChange(false);
    } else if (scrollPositionDx < -10) this.isShow = true;
  }

  onResizeHandler = (): void => {
    this.onScrollHandler();
    this.onDrawerChange(false);
  };

  onDrawerChange = (open: boolean) => {
    this.isDrawerOpen = open;
    if (open) Utils.setLCS(Config.LCS_DRAWER, "open");
    else Utils.setLCS(Config.LCS_DRAWER, "close");
  };

  onNavItemClicked = () => {
    this.isDrawerOpen = false;
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("resize", this.onResizeHandler, false);
  }

  disconnectedCallback(): void {
    window.removeEventListener("resize", this.onResizeHandler, false);
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    const hide = { open: this.isDrawerOpen };
    return html`
      <div
        class="in-header container-fluid position-fixed
        d-flex align-items-center p-2 ${classMap(hide)}"
      >
        <header
          class="header d-flex align-items-center
          w-100 my-auto mx-auto ps-3 pe-2"
        >
          <!-- Header title -->
          <in-header-logo title=${this.title}></in-header-logo>

          <!-- Dark Mode Toggle Button -->
          ${this.supportDarkMode
            ? html`<in-toggle-dark
                ?darkMode=${this.darkMode}
                class="ms-auto"
              ></in-toggle-dark>`
            : nothing}

          <!-- Hamburger Menu Button -->
          <in-button-hamburger
            class="ms-auto"
            ?isDrawerOpen=${this.isDrawerOpen}
            .onHamburgerClick=${this.onDrawerChange}
          ></in-button-hamburger>

          <!-- Header Navigation -->
          <in-header-nav
            ?isDrawerOpen=${this.isDrawerOpen}
            .navData=${this.navData}
            .onNavItemClicked=${this.onNavItemClicked}
          ></in-header-nav>
        </header>
      </div>
    `;
  }
}
