<script setup lang="ts">
import { computed } from 'vue';
import { path } from './params';
import VHeading from '@/docs/components/heading/v-heading.vue';
import VShowcase from '@/docs/components/showcase/v-showcase.vue';
import VRow from '@/docs/components/container/row/v-row.vue';

import { kebabCase } from '@/docs/utils/kebabCase';

import VBtn from '@/packages/btn/v-btn.vue';

defineProps<{
  design?: 'outline' | 'text';
  disabled?: boolean;
  description?: string;
}>();
</script>

<template>
  <v-showcase>
    <slot>
      <v-btn >Default</v-btn>
    </slot>
  </v-showcase>
</template>
