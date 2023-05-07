<script setup lang="ts">
import { path } from './params';
import VHeading from '@/docs/components/heading/v-heading.vue';
</script>

<template>
  <v-heading type="h1" id="button" :path="path">Link</v-heading>
  <p>Text hyperlink.</p>
</template>
