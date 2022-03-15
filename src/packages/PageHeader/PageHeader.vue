<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from 'vue';
import Icon from '@/packages/Icon/Icon.vue';
import { iconList } from '@/packages/Icon/iconList';

type IconType = typeof iconList[number];
withDefaults(
  defineProps<{
    prevTitle?: string;
    title: string;
    icon?: IconType;
  }>(),
  {
    icon: 'chevron-left',
    prevTitle: '戻る',
  }
);
const emits = defineEmits<{
  (emit: 'goBack'): void;
}>();
const handleClick = () => {
  emits('goBack');
};
</script>

<template>
  <div class="cs-page-header" v-bind="$attrs">
    <div class="cs-page-header__left" @click="handleClick">
      <slot name="icon"> <icon :name="icon" /> </slot>
      <div class="cs-page-header__prev-title">
        <slot name="prev-title">{{ prevTitle }}</slot>
      </div>
    </div>

    <div class="cs-page-header__divider" />

    <div class="cs-page-header__title">
      <slot name="title">{{ title }}</slot>
    </div>
  </div>
</template>

<style lang="scss">
.cs-page-header {
  display: flex;
  align-items: center;
  line-height: 24px;

  &__left {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  &__icon {
    margin-right: 6px;
  }

  &__prev-title {
    font-size: 14px;
    font-weight: 500;
    margin-left: 6px;
  }

  &__divider {
    width: 1px;
    height: 16px;
    background-color: #dcdfe6;
    margin: 0 16px;
  }

  &__title {
    font-size: 16px;
  }
}
</style>
