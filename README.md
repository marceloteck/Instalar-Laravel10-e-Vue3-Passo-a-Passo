# Criando projeto Laravel 10 + Vue 3 (Passo a Passo) com Router Vue
<br>
<div align="center">
  
[Voltar ao git principal](https://github.com/marceloteck/LaravelVue/tree/main) 

</div>

<br>

![Vue+Laravel](https://raw.githubusercontent.com/marceloteck/LaravelVue/main/image/vue%2Blaravel-img.png)


<br>

### Instalando o Laravel mais recente

```
 composer create-project laravel/laravel nameProjectExample 
 ```
<br>

### Ou vc pode instalar dessa forma

```
composer global require laravel/installer
``` 
 
```
laravel new nameProjectExample
``` 
<br>

### Depois vc vai entrar na pasta de seu projeto
Você deve colocar o nome da pasta escolhida

```
cd nameProjectExample
```
<br>

## Agora vamos para o próximo passo

### Instalando o Vue.js
Agora vamos instalar o vue mais recente

```
npm install vue@next
```

Depois do Vue.js instalado vamos instalar também o **Vue Router**, o **axios** e o plugin do **vitejs** e o **pinia**:

```
npm install vue-router@4
npm install axios
npm install @vitejs/plugin-vue
npm install pinia
```
<br>

Vamos instalar também o **JWT** para o LARAVEL:
<br>
Com ele vamos conseguir gerar tokens para segurança do nosso login

```
composer require firebase/php-jwt
```


Agora executamos o seguinte:
```
npm install
```

<br>

PRONTO! <br>
Agora que fizemos todas as intalações, vamos para para o nosso editor fazer as configurações, e logo veremos funcionar o Laravel e o Vue ao mesmo tempo.

<br><br>


### Configuração Automática

Basta clonar o repositorio na pasta desejada

```
git clone https://github.com/marceloteck/Instalar-Laravel10-e-Vue3-Passo-a-Passo.git
```

Depois de baixado, escolha qual versão você quer usar e depois só copiar os diretorios e o arquivo: ```vite.config.js``` para a pasta principal do seu projeto, que os arquivos serão substituidos.

<br>

## #MÃOS A OBRA

Agora que está tudo configurado é só execultar o seguinte código no terminal e começar a trabalhar com vue e laravel ao mesmo tempo em seu pc.

```
npm rum dev
```
