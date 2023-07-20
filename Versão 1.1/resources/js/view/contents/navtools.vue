<template>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link :to="{name:'index.tools'}" class="nav-link" active-class="active">Tools</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'tools.links'}" class="nav-link" active-class="active">Links</router-link>
      </li>
    </ul>
  </template>
  