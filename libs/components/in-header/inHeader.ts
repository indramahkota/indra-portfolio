import { html, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { InNavigationModel } from "../../data/model/models";
import ScrollElement from "../base/scrollElement";
import "../in-button-hamburger/inButtonHamburger";
import "../in-header-logo/inHeaderLogo";
import "../in-header-nav/inHeaderNav";
import "../in-toogle-dark/inToggleDark";
import "./inHeader.scss";

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
  lightMode = false;
  @property({ type: Boolean })
  supportDarkMode = true;

  // Methods
  @property({ type: Object })
  onToggleDark = (_checked: boolean) => {};
  @property({ type: Object })
  onDrawerChange = (_open: boolean) => {};

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
                ?darkMode=${this.lightMode}
                .onToggleDark=${this.onToggleDark}
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
          ></in-header-nav>
        </header>
      </div>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  interface HTMLElementTagNameMap {
    "in-header": InHeader;
  }
}
