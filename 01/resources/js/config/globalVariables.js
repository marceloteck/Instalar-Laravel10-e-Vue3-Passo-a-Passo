import { reactive } from 'vue';

// Defina suas variáveis globais aqui
const globalVariables = reactive({
  // executar: php artisan storage:link
  appName: 'Meu Aplicativo',
  storagePath: '/storage/',
});

export default globalVariables;
