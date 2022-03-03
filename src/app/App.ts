import { html, render } from "lit";
import AppConfig from "../data/Config";
import Utils from "../libs/utils/Utils";

import "./views/personalWebsite";

if (Utils.getLCS(AppConfig.LCS_THEME) === "dark") {
  window.document.body.classList.add("dark");
} else {
  window.document.body.classList.remove("dark");
}

window.addEventListener("DOMContentLoaded", () => {
  render(
    html`<indramahkota-personal-website></indramahkota-personal-website>`,
    document.body
  );
});
