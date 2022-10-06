import { createApp } from "vue";
import App from "./App.vue";
import router from "./Core/Route/Router";

import "./main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
