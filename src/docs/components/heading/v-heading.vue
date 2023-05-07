<script setup lang="ts">
import { useAttrs, computed } from 'vue';
type HeadingType = 'h1' | 'h2' | 'h3';

const attrs = useAttrs() as { id?: string };
const props = defineProps<{
  type: HeadingType;
  path?: string;
}>();

const isHash = computed(() => {
  return props.path && attrs.id;
});
</script>

<template>
  <component
    :is="type"
    class="v-heading"
    :class="[type ? `--${type}` : '']"
    v-bind="$attrs"
  >
    <slot />

    <router-link
      :to="{ path, hash: `#${attrs.id}` }"
      v-if="isHash"
      class="v-heading__anchor"
      >#</router-link
    >
  </component>
</template>

<style lang="scss" scoped>
.v-heading {
  position: relative;
  margin: 0;
  font-weight: 600;
  line-height: 1.25;
  color: #606266;

  &__anchor {
    position: absolute;
    left: 0;
    padding-right: 0.23em;
    margin-top: 0.125em;
    margin-left: -0.87em;
    font-size: 0.85em;
    color: #10b981;
    text-decoration: none;
  }

  &.--h1 {
    margin-bottom: 2rem;
    font-size: 2.2rem;

    @include mq('sm') {
      font-size: 1.9rem;
    }
  }

  &.--h2 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    font-size: 1.65rem;
  }

  &.--h3 {
    margin-top: 2rem;
    font-size: 1.35rem;
  }
}
</style>
