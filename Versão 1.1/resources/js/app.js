import './bootstrap';

import router from './routes/configRouter'; // Importando as configurações de roteamento do arquivo router.js
import app from './components/components'; // Importando a instância do aplicativo do arquivo components.js
import pinia from './config/Pinia'; // Importando o arquivo pinia.js
import isLoadingStore from './config/isLoadingStore'; // gif de carregamento
import globalVariables from './config/globalVariables'; // variaveis global da aplicação

// Usar o Pinia
app.use(pinia);

// Usar o roteamento
app.use(router);

app.use(isLoadingStore);

// Use o mixin global
app.mixin(globalVariables);

// Montar o aplicativo
app.mount("#app-root");