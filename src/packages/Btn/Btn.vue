<script lang="ts" setup>
import { defineProps } from 'vue';
import { Props, handleBlur, handleFocus, handleClick } from './useBtn';

defineProps<Props>();
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="loading || disabled"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <slot />
  </button>
</template>
