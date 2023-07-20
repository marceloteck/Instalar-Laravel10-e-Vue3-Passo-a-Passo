<template>
    <!-- Page Header-->
<header class="page-header-ui page-header-ui-dark bg-img-cover overlay overlay-80" 
:style="`background-image: url(${globalVariables.imagePath}Gado-de-corte-brasileiro-conheca-as-principais-racas-thumbnail.png)`">
    <div class="page-header-ui-content position-relative">
        <div class="container px-5 text-center">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-8">
                    <h1 class="page-header-ui-title mb-3">{{ $route.meta.title }}</h1>
                    <p class="page-header-ui-text mb-0">
                        <template  v-if="auth.isAuthenticated">
                            Bem Vindo {{ auth.UserName }}
                            <br>
                        </template>
                        <template v-else>
                            Olá visitante
                        </template>
                       
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    <div class="svg-border-rounded text-light">
        <!-- Rounded SVG Border-->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
    </div>
</header>
</template>
<script setup>
import { UseAuthLogin } from '@/config/auth.js';
import globalVariables from '@/config/globalVariables.js';
const auth = UseAuthLogin();
</script>