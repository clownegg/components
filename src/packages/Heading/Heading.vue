<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
const props = defineProps<{
  tag: HeadingType;
  href?: string;
}>();

const headingRef = ref<HTMLHeadingElement>();
const isAnchor = computed(() => {
  return headingRef.value?.id && props.href;
});
</script>

<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="cs-heading"
    :class="[`--${tag}`]"
    ref="headingRef"
  >
    <slot />
    <router-link :to="href" aria-hidden="true" v-if="isAnchor">#</router-link>
  </component>
</template>

<style lang="scss">
.cs-heading {
  margin: 0;
  font-weight: 500;
  color: #303133;

  &.--h1 {
    font-size: 1.5rem;
  }

  &.--h2 {
    font-size: 1.25rem;
  }

  &.--h3 {
    font-size: 1.125rem;
  }

  &.--h4 {
    font-size: 1rem;
  }

  &.--h5 {
    font-size: 0.875rem;
  }

  &.--h6 {
    font-size: 0.75rem;
  }

  a {
    float: left;
    margin-right: 0.24rem;
    color: #409eff;
    text-decoration: none;
    opacity: 0;
  }

  &:focus,
  &:hover {
    a {
      opacity: 1;
    }
  }
}
</style>
