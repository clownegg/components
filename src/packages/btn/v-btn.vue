<script lang="ts" setup>
import VBtnLoading from './v-btn-loading.vue';

type Theme = 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'dark';
export interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  round?: boolean;
  shadow?: boolean;
  theme?: Theme;
  variant?: 'text' | 'outline';
}

defineProps<ButtonProps>();
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
    :class="[
      'v-btn',
      {
        'is-block': block,
        'is-round': round,
        'is-shadow': shadow,
      },
      variant ? `v-btn--${variant}` : '',
      theme ? `v-btn--${theme}` : '',
    ]"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <v-btn-loading v-else />
    </template>

    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" src="./btn.scss" />
