<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
const props = defineProps<{
  tag: HeadingType;
  href?: string;
}>();

const headingRef = ref<HTMLHeadingElement>();
const isAnchor = computed(() => {
  if (!headingRef.value) return false;

  return headingRef.value.id && props.href;
});
</script>

<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="cs-heading"
    :class="[`__${tag}`]"
    ref="headingRef"
  >
    <slot />
    <a
      :href="href"
      aria-hidden="true"
      v-if="isAnchor"
      class="cs-heading__anchor"
    >
      #
    </a>
  </component>
</template>

<style lang="scss">
.cs-heading {
  margin: 0;
  color: #303133;
  font-weight: 500;

  &.__h1 {
    font-size: 1.5rem;
  }

  &.__h2 {
    font-size: 1.25rem;
  }

  &.__h3 {
    font-size: 1.125rem;
  }

  &.__h4 {
    font-size: 1rem;
  }

  &.__h5 {
    font-size: 0.875rem;
  }

  &.__h6 {
    font-size: 0.75rem;
  }

  &__anchor {
    float: left;
    color: #409eff;
    opacity: 0;
    margin-right: 0.23rem;
    text-decoration: none;
  }

  &:focus,
  &:hover {
    .cs-heading__anchor {
      opacity: 1;
    }
  }
}
</style>
