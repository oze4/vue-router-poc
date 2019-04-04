<template>
  <v-app id="inspire">
    <app-topbar/>
    <slot/>
  </v-app>
</template>

<script>
import AppTopbar from "../components/Topbar";

export default {
  components: {
    AppTopbar
  }
};
</script>

<style>
</style>