<template>
    <div>

        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand"  href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name:'home'}" class="nav-link" active-class="active">home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'login'}" class="nav-link" active-class="active">login</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'cadastro'}" class="nav-link" active-class="active">cadastro</router-link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
       <router-view></router-view>
    </div>
</template>






