import { register } from "./registerSw";
// import { getNotificationSubscription, requestNotificationPermission } from "./scripts/globals/requestNotification";

window.addEventListener("load", async () => {
  await register("./sw.js");
  // await requestNotificationPermission();
  // await getNotificationSubscription();
});
