<script lang="ts" setup>
import VLayout from '@/docs/layouts/v-layout.vue';
</script>

<template>
  <v-layout>
    <router-view />
  </v-layout>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

p {
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 1.7;
  color: #303133;
}

p code {
  padding: 3px 6px;
  font-size: 14px;
  color: #476582;
  background-color: #f6f6f7;
  border-radius: 4px;
  transition:
    color 0.5s,
    background-color 0.5s;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
