// importando o vue.js
import { createApp } from 'vue/dist/vue.esm-bundler';

// Importar componentes (menu para o roteamento)
import menudir from "./components/menudir.vue";
import navheader from "./components/navheader.vue";

const app = createApp({});
app.component('menudir', menudir);
app.component('navheader', navheader);

export default app;
