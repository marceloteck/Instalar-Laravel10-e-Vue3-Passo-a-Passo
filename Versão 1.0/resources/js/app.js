import './bootstrap';

import router from './router'; // Importando as configurações de roteamento do arquivo router.js
import app from './components'; // Importando a instância do aplicativo do arquivo components.js

// Usar o roteamento
app.use(router);

// Montar o aplicativo
app.mount("#app");


