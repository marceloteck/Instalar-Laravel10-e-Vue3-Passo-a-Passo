// importando o vue.js
import { createApp } from 'vue/dist/vue.esm-bundler';
const app = createApp({});

// Importando Componentes
import headerMap from '@/components/headerComponents.js';
import PagesMap  from '@/components/pagesComponents.js';

// constante Map
const ComponentsMap = {
  ...PagesMap,
  ...headerMap,
};

Object.entries(ComponentsMap).forEach(([name, component]) => {
  app.component(name, component);
});

export default app;