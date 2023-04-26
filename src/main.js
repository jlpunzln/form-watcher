import { createApp } from "vue";
import App from "./App.vue";
import ListPage from "./components/List.vue";

createApp(App).component("ListPage", ListPage).mount("#app");
