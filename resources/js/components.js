// importando o vue.js
import { createApp } from 'vue/dist/vue.esm-bundler';

// Importar componentes (menu para o roteamento)
import menudir from "./components/menudir.vue";

const app = createApp({});
app.component('menudir', menudir);

export default app;
