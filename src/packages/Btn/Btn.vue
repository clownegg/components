<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import Icon from '@/packages/Icon/Icon.vue';
import { iconList } from '@/packages/Icon/iconList';
import Loading from '@/packages/Loading/Loading.vue';

type IconType = typeof iconList[number];
const btnTheme = [
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'dark',
] as const;
type BtnTheme = typeof btnTheme[number];

defineProps<{
  loading?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  plain?: boolean;
  outlined?: boolean;
  round?: boolean;
  icon?: IconType;
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
    class="cs-btn"
    :class="[
      {
        'is-fluid': fluid,
        'is-round': round,
        'is-outlined': outlined,
        'is-plain': plain,
      },
      theme ? `--${theme}` : '',
    ]"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <loading v-else class="cs-loading" />
    </template>
    <icon v-else-if="icon" :name="icon" :size="14" />

    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
@import './style';
</style>
