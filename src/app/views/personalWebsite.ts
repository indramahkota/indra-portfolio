import { CommonElement } from "@in/main";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import AppConfig from "../../data/myConfig";
import { Route } from "../routes/route";
import "./pages/pageLanding";
import "./pages/pageProject";

@customElement("indramahkota-personal-website")
export class PersonalWebsite extends CommonElement {
  _forceUpdateHandler = async (): Promise<void> => {
    if (window.location.hash === "#content") return;
    await this.requestUpdate();
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("hashchange", this._forceUpdateHandler, false);
  }

  disconnectedCallback(): void {
    window.removeEventListener("hashchange", this._forceUpdateHandler, false);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <in-header
        title=${AppConfig.APP_NAME}
        .navData=${AppConfig.APP_NAVIGATION}
      ></in-header>
      <main id="content">
        ${new Route("/", () => html`<page-landing />`, true).mount()}
        ${new Route("/profile", () => html`<page-landing />`, true).mount()}
        ${new Route("/projects", () => html`<page-project />`, true).mount()}
      </main>
      <in-footer text=${AppConfig.TEXT_FOOTER}></in-footer>
    `;
  }
}
