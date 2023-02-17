<script setup>
const { defineProps } = require("vue");
const { ref } = require("vue");
const props = defineProps(["user"]);
const temp = ref("hello");

if (props.user) {
  temp.value = "bad";
} else {
  temp.value = "good";
}
</script>

<template>
  <div>{{ temp }}</div>
</template>

<style lang="css">
</style>