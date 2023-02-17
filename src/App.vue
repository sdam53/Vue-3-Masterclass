<script setup>
import PageHome from "./components/PageHome";
import PageUserPost from "./components/PageUserPost";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <PageUserPost :user="false" />
    <PageHome />
  </div>
</template>

<style>
</style>