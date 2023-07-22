import './bootstrap';

import app from './components/components'; // Importando a instância do aplicativo do arquivo components.js
import router from './routes/configRouter'; // Importando as configurações de roteamento do arquivo router.js
import pinia from './config/Pinia'; // Importando o arquivo pinia.js
import isLoadingStore from './config/isLoadingStore'; // gif de carregamento
import globalVariables from './config/globalVariables'; // variaveis global da aplicação

app.use(pinia); // Usar o Pinia
app.use(router); // Usar o roteamento
app.use(isLoadingStore); // gif de carregamento
app.mixin(globalVariables);// Use o mixin global (Variaveis globais)
app.mount("#app-root"); // Montar o aplicativo