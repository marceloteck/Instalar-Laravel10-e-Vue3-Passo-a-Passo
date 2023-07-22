<template>
    <!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <div class="container px-5">
                <router-link :to="{name:'index.Home'}" class="navbar-brand text-dark">Name Website</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i data-feather="menu"></i></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-lg-5">
                        <li class="nav-item">
                            <router-link :to="{name:'index.Home'}" class="nav-link">
                                Inicio
                            </router-link>
                        </li>
                        <li class="nav-item dropdown dropdown-xl no-caret">
                            <router-link :to="{name:'index.pagina01'}" class="nav-link">
                                Página 01  
                            </router-link>
                        </li>
                        <li class="nav-item dropdown dropdown-xl no-caret">
                            <router-link :to="{name:'index.menu1'}" class="nav-link">
                                Menu 1  
                            </router-link>
                        </li>
                        
                    </ul>
                
                </div>
            </div>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <template  v-if="auth.isAuthenticated">
            Bem Vindo {{ auth.UserName }}
            <br>
        </template>
        <template v-else>
            Olá visitante
        </template>
      </li> 
      
      <li class="nav-item">
        <a class="nav-link" @click="logout()" data-widget="control-sidebar" data-slide="true" role="button">
            <i class="fa-solid fa-right-from-bracket"></i>
        </a>
      </li>
    </ul>


</nav>
<!-- /.navbar -->
</template>

<script setup>
import { UseAuthLogin } from '@/config/auth.js';
const auth = UseAuthLogin();
function logout(){
    auth.clearLogout();
}

// outras ferramentas em comentario
// {{ $route.meta.title }} // titulo atual

// import globalVariables from '@/config/globalVariables.js'; // variaveis globais
// globalVariables.imagePath


</script>