import { createApp } from "vue";
import { createPinia } from "pinia";
import FontAwesomeIcon from "@/utils/fontAwesome";
import { Skeletor } from "vue-skeletor";
import Multiselect from "@vueform/multiselect";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import "./assets/css/tailwind.css";
import "./assets/scss/dark.scss";
import "vue-skeletor/dist/vue-skeletor.css";
import "@vueform/multiselect/themes/default.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component(Skeletor.name, Skeletor);
// eslint-disable-next-line vue/multi-word-component-names
app.component("multiselect", Multiselect);
app.mount("#app");
