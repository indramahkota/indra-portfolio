import { html, render } from "lit";
import "./views/personalWebsite";

window.addEventListener("DOMContentLoaded", () => {
  render(
    html`<indramahkota-personal-website></indramahkota-personal-website>`,
    document.body
  );
});
