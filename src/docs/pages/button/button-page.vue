<script setup lang="ts">
import ButtonPageHeader from './button-page-header.vue';
import ButtonPageDemo from './button-page-demo.vue';
</script>

<template>
  <div class="button-page">
    <button-page-header />
    <button-page-demo />
  </div>
</template>

<style lang="scss">
.button-page {
  .v-btn {
    margin: 0.5rem 0.125rem;
  }
}
</style>
