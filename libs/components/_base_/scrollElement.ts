import CommonElement from "./commonElement";

export default abstract class ScrollElement extends CommonElement {
  private ticking = false;
  protected currScrollPosition = 0.0;
  protected lastScrollPosition = 0.0;

  abstract onScrollHandler(): void;
  private readonly _onScrollHandler = (): void => {
    this.currScrollPosition = window.scrollY;
    window.setTimeout(() => {
      this.lastScrollPosition = window.scrollY;
    }, 50);
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.onScrollHandler();
        this.ticking = false;
      });
      this.ticking = true;
    }
  };

  protected getScrollPositionDx(): number {
    return this.currScrollPosition - this.lastScrollPosition;
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("scroll", this._onScrollHandler, false);
  }

  disconnectedCallback(): void {
    window.removeEventListener("scroll", this._onScrollHandler, false);
    super.disconnectedCallback();
  }
}
