<script setup lang="ts">
import LinkPageHeader from './link-page-header.vue';
import LinkPageDemo from './link-page-demo.vue';
</script>

<template>
  <div class="link-page">
    <link-page-header />

    <link-page-demo title="Example" />
    <link-page-demo title="Disabled" disabled />
    <link-page-demo title="Underline" underline />
  </div>
</template>

<style lang="scss">
.link-page {
  .v-link {
    margin: 0.5rem;
  }
}
</style>
