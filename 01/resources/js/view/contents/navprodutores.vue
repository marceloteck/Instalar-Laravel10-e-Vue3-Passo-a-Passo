<template>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link :to="{name:'index.pendentes'}" class="nav-link" active-class="active">Pendentes</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'index.notificados'}" class="nav-link" active-class="active">Notificados</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'index.faltando_doses'}" class="nav-link" active-class="active">Faltando Doses</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'index.sem_doses'}" class="nav-link" active-class="active">Sem doses</router-link>
      </li>
    </ul>
  </template>
  