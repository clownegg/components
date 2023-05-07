<script setup lang="ts">
import { computed } from 'vue';
import { path } from './params';
import VHeading from '@/docs/components/heading/v-heading.vue';
import VShowcase from '@/docs/components/showcase/v-showcase.vue';
import VRow from '@/docs/components/container/row/v-row.vue';

import { kebabCase } from '@/docs/utils/kebabCase';

import VBtn from '@/packages/button/v-btn.vue';

const props = defineProps<{
  title: string;
  design?: 'outline' | 'text';
  disabled?: boolean;
  description?: string;
}>();

const id = computed(() => {
  return kebabCase(props.title);
});
</script>

<template>
  <v-heading type="h2" :id="id" :path="path">{{ title }}</v-heading>

  <slot name="description">
    <p>{{ description }}</p>
  </slot>

  <v-showcase>
    <slot>
      <v-row>
        <v-btn :design="design" :disabled="disabled">Default</v-btn>
        <v-btn theme="primary" :design="design" :disabled="disabled"
          >Primary</v-btn
        >
        <v-btn theme="success" :design="design" :disabled="disabled"
          >Success</v-btn
        >
        <v-btn theme="warning" :design="design" :disabled="disabled"
          >Warning</v-btn
        >
        <v-btn theme="info" :design="design" :disabled="disabled">Info</v-btn>
        <v-btn theme="danger" :design="design" :disabled="disabled"
          >Danger</v-btn
        >
        <v-btn theme="dark" :design="design" :disabled="disabled">Dark</v-btn>
      </v-row>
    </slot>
  </v-showcase>
</template>
