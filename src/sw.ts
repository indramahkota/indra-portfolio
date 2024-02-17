import { register } from "./registerSw";

window.addEventListener("load", async () => {
  await register("./sw.js");
});
