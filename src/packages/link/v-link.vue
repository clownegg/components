<script lang="ts" setup>
import { computed } from 'vue';

const linkTheme = [
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'dark',
] as const;

type Theme = (typeof linkTheme)[number];
export interface LinkProps {
  href: string;
  external?: boolean;
  theme?: Theme;
  disabled?: boolean;
  underline?: boolean;
  asButton?: boolean;
}

const props = defineProps<LinkProps>();
const linkClass = computed(() => [
  'v-link__anchor',
  props.underline ? `is-underline` : '',
]);
</script>

<template>
  <span
    :class="[
      'v-link',
      {
        'is-disabled': disabled,
        'as-button': asButton,
      },
      theme ? `--${theme}` : '',
    ]"
    v-bind="$attrs"
  >
    <a v-if="external" :href="href" target="_blank" :class="linkClass">
      <slot />
    </a>

    <router-link v-else :to="href" :class="linkClass">
      <slot />
    </router-link>
  </span>
</template>

<style lang="scss">
@import './style';
</style>
