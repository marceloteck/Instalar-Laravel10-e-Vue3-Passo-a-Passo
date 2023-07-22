// importando o vue.js
import { createApp } from 'vue/dist/vue.esm-bundler';
const app = createApp({});

// Importando Componentes
import * as hc from '@/components/headerComponents.js';
import * as pc from '@/components/pagesComponents.js';

const { navbar, theheader, thefooter, routerviewpage }  = hc;
const { indexview, homeview, navprodutores, up_exel, toolsView, navtools }   = pc;

const headerMap = { navbar, theheader, thefooter, routerviewpage };
const PagesMap  = { indexview, homeview, navprodutores, up_exel, toolsView, navtools };

// constante Map
const combinedMap = {
  ...PagesMap,
  ...headerMap
};

Object.entries(combinedMap).forEach(([name, component]) => {
  app.component(name, component);
});

export default app;