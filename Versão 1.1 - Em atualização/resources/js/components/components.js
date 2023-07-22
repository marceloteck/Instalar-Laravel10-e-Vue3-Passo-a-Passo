// importando o vue.js
import { createApp } from 'vue/dist/vue.esm-bundler';
const app = createApp({});

// Importando Componentes
import * as hc from '@/components/headerComponents.js';
import * as pc from '@/components/pagesComponents.js';

const { navbar, thefooter, routerviewpage }  = hc;
const { menu1view, homeview, pagina01view }   = pc;

const headerMap = { navbar, thefooter, routerviewpage };
const PagesMap  = { menu1view, homeview, pagina01view };

// constante Map
const combinedMap = {
  ...PagesMap,
  ...headerMap
};

Object.entries(combinedMap).forEach(([name, component]) => {
  app.component(name, component);
});

export default app;