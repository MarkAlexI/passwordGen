import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("SW: Need Refresh");
  },
  onOfflineReady() {
    console.log("SW: Offline Ready");
  },
});

createApp(App).mount("#app");
