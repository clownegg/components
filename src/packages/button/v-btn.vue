<script lang="ts" setup>
import VLoading from './v-loading.vue';

const btnTheme = [
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'dark',
] as const;
type BtnTheme = (typeof btnTheme)[number];
type DesignType = 'text' | 'outline';

defineProps<{
  loading?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  round?: boolean;
  design?: DesignType;
  theme?: BtnTheme;
}>();

const emits = defineEmits<{
  (emit: 'click', event: MouseEvent): void;
  (emit: 'focus', event: FocusEvent): void;
  (emit: 'blur', event: FocusEvent): void;
}>();
const handleClick = (event: MouseEvent) => {
  emits('click', event);
};
const handleFocus = (event: FocusEvent) => {
  emits('focus', event);
};
const handleBlur = (event: FocusEvent) => {
  emits('blur', event);
};
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="loading || disabled"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    class="v-btn"
    :class="[
      {
        'is-fluid': fluid,
        'is-round': round,
      },
      design ? `--${design}` : '',
      theme ? `--${theme}` : '',
    ]"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <v-loading v-else class="v-loading" />
    </template>

    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
@import './style';
</style>
