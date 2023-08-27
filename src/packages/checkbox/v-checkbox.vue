<script lang="ts" setup>
import {useCheckbox, CheckboxEmits, CheckboxProps} from "./useCheckbox"

const props = defineProps<CheckboxProps>();
const emits = defineEmits<CheckboxEmits>();
const {model, handleChange, handleFocus, handleBlur} = useCheckbox(props, emits);
</script>

<template>
  <label class="v-checkbox">
    <span class="v-checkbox__input">
      <input 
        type="checkbox" 
        :name="name"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        class="v-checkbox__origin"
      />
      <span class="v-checkbox__inner" />
    </span>
    <span class="v-checkbox__label">{{ label }}</span>
  </label>
</template>

<style lang="scss" src="./checkbox.scss" />
