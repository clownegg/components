<script setup lang="ts">
import { computed } from 'vue';
import { path } from './params';
import VHeading from '@/docs/components/heading/v-heading.vue';
import VShowcase from '@/docs/components/showcase/v-showcase.vue';
import VRow from '@/docs/components/container/row/v-row.vue';

import { kebabCase } from '@/docs/utils/kebabCase';

import VLink, { LinkProps } from '@/packages/link/v-link.vue';

type Props = {
  title: string;
  description?: string;
} & Pick<LinkProps, 'disabled' | 'underline' | 'asButton' | 'external'>;

const props = defineProps<Props>();
const id = computed(() => {
  return kebabCase(props.title);
});

const href = computed(() => {
  return props.external ? 'https://google.com' : '#';
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
        <v-link
          :href="href"
          :underline="underline"
          :disabled="disabled"
          :as-button="asButton"
          :external="external"
          >Default</v-link
        >

        <v-link
          :href="href"
          :underline="underline"
          :disabled="disabled"
          theme="primary"
          :as-button="asButton"
          :external="external"
          >Primary</v-link
        >

        <v-link
          :href="href"
          :underline="underline"
          :disabled="disabled"
          theme="success"
          :as-button="asButton"
          :external="external"
          >Success</v-link
        >

        <v-link
          :href="href"
          :underline="underline"
          :disabled="disabled"
          theme="warning"
          :as-button="asButton"
          :external="external"
          >Warning</v-link
        >

        <v-link
          :href="href"
          :underline="underline"
          :disabled="disabled"
          theme="info"
          :as-button="asButton"
          :external="external"
          >Info</v-link
        >

        <v-link
          :href="href"
          :underline="underline"
          :disabled="disabled"
          theme="danger"
          :as-button="asButton"
          >Danger</v-link
        >

        <v-link
          href="#"
          :underline="underline"
          :disabled="disabled"
          theme="dark"
          :as-button="asButton"
          :external="external"
          >Dark</v-link
        >
      </v-row>
    </slot>
  </v-showcase>
</template>
