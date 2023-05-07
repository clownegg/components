<script setup lang="ts">
import { computed } from 'vue';
import { path } from './params';
import VHeading from '@/docs/components/heading/v-heading.vue';
import VShowcase from '@/docs/components/showcase/v-showcase.vue';
import VRow from '@/docs/components/container/row/v-row.vue';

import { kebabCase } from '@/docs/utils/kebabCase';

import VLink from '@/packages/link/v-link.vue';

const props = defineProps<{
  title: string;
  description?: string;
  disabled?: boolean;
  underline?: boolean;
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
        <v-link href="#" :underline="underline" :disabled="disabled"
          >Default</v-link
        >

        <v-link
          href="#"
          :underline="underline"
          :disabled="disabled"
          theme="primary"
          >Primary</v-link
        >

        <v-link
          href="#"
          :underline="underline"
          :disabled="disabled"
          theme="success"
          >Success</v-link
        >

        <v-link
          href="#"
          :underline="underline"
          :disabled="disabled"
          theme="warning"
          >Warning</v-link
        >

        <v-link
          href="#"
          :underline="underline"
          :disabled="disabled"
          theme="info"
          >Info</v-link
        >

        <v-link
          href="#"
          :underline="underline"
          :disabled="disabled"
          theme="danger"
          >Danger</v-link
        >

        <v-link
          href="#"
          :underline="underline"
          :disabled="disabled"
          theme="dark"
          >Dark</v-link
        >
      </v-row>
    </slot>
  </v-showcase>
</template>
