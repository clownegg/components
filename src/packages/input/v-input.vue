<script lang="ts" setup>
import {useInput, InputEmits} from "./useInput"
export interface InputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  autocomplete?: string;
  disabled?: boolean;
  readonly?: boolean;
  tabindex?: number;
  modelValue?: string | number | null;
}
withDefaults(defineProps<InputProps>(), {
  type: 'text',
  autocomplete: 'off',
});

const emits = defineEmits<InputEmits>();
const {handleInput, handleChange, handleFocus, handleBlur, handleKeydown} = useInput(emits)
</script>

<template>
  <div :class="[
    'v-input',
    {
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append
    }
  ]">
    <!-- prepend slot -->
    <div v-if="$slots.prepend" class="v-input__prepend">
      <slot name="prepend" />
    </div>

    <div class="v-input__container">
      <!-- prefix slot -->
      <div v-if="$slots.prefix" class="v-input__prefix">
        <slot name="prefix" />
      </div>

      <input
        v-bind="$attrs"
        :name="name"
        :type="type"
        :tabindex="tabindex"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :disabled="disabled"
        :readonly="readonly"
        :value="modelValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        :class="[
          'v-input__inner'
        ]"
      />

      <!-- suffix slot -->
      <div v-if="$slots.suffix" class="v-input__suffix">
        <slot name="suffix" />
      </div>
    </div>

    <!-- append slot -->
    <div v-if="$slots.append" class="v-input__append">
      <slot name="append" />
    </div>
  </div>
</template>

<style lang="scss" src="./input.scss" />
