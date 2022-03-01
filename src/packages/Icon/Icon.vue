<script lang="ts">
import {
  defineComponent,
  PropType,
  defineAsyncComponent,
  computed,
  CSSProperties,
} from 'vue';

export const iconType = [
  'calendar',
  'check',
  'circle-check',
  'circle-check-outline',
  'circle-close',
  'circle-minus',
  'circle-minus-outline',
  'circle-plus',
  'circle-plus-outline',
  'close',
  'download',
  'download-done',
  'edit',
  'error',
  'grid',
  'grid-small',
  'hamburger',
  'heart',
  'heart-outline',
  'hide',
  'home',
  'home-outline',
  'info',
  'more-horizontal',
  'more-vertical',
  'redo',
  'search',
  'setting',
  'setting-outline',
  'show',
  'trash',
  'user',
  'warning',
] as const;

type IconType = typeof iconType[number];

export default defineComponent({
  props: {
    size: [Number, String],
    color: [String],
    name: String as PropType<IconType>,
  },
  components: {
    calendar: defineAsyncComponent(() => import('@/icons/IconCalendar.vue')),
    check: defineAsyncComponent(() => import('@/icons/IconCheck.vue')),
    'circle-check': defineAsyncComponent(
      () => import('@/icons/IconCircleCheck.vue')
    ),
    'circle-check-outline': defineAsyncComponent(
      () => import('@/icons/IconCircleCheckOutline.vue')
    ),
    'circle-close': defineAsyncComponent(
      () => import('@/icons/IconCircleClose.vue')
    ),
    'circle-close-outline': defineAsyncComponent(
      () => import('@/icons/IconCircleCloseOutline.vue')
    ),
    'circle-minus': defineAsyncComponent(
      () => import('@/icons/IconCircleMinus.vue')
    ),
    'circle-minus-outline': defineAsyncComponent(
      () => import('@/icons/IconCircleMinusOutline.vue')
    ),
    'circle-plus': defineAsyncComponent(
      () => import('@/icons/IconCirclePlus.vue')
    ),
    'circle-plus-outline': defineAsyncComponent(
      () => import('@/icons/IconCirclePlusOutline.vue')
    ),
    close: defineAsyncComponent(() => import('@/icons/IconClose.vue')),
    download: defineAsyncComponent(() => import('@/icons/IconDownload.vue')),
    'download-done': defineAsyncComponent(
      () => import('@/icons/IconDownloadDone.vue')
    ),
    edit: defineAsyncComponent(() => import('@/icons/IconEdit.vue')),
    error: defineAsyncComponent(() => import('@/icons/IconError.vue')),
    grid: defineAsyncComponent(() => import('@/icons/IconGrid.vue')),
    'grid-small': defineAsyncComponent(
      () => import('@/icons/IconGridSmall.vue')
    ),
    hamburger: defineAsyncComponent(() => import('@/icons/IconHamburger.vue')),
    heart: defineAsyncComponent(() => import('@/icons/IconHeart.vue')),
    'heart-outline': defineAsyncComponent(
      () => import('@/icons/IconHeartOutline.vue')
    ),
    hide: defineAsyncComponent(() => import('@/icons/IconHide.vue')),
    home: defineAsyncComponent(() => import('@/icons/IconHome.vue')),
    'home-outline': defineAsyncComponent(
      () => import('@/icons/IconHomeOutline.vue')
    ),
    info: defineAsyncComponent(() => import('@/icons/IconInfo.vue')),
    'more-horizontal': defineAsyncComponent(
      () => import('@/icons/IconMoreHorizontal.vue')
    ),
    'more-vertical': defineAsyncComponent(
      () => import('@/icons/IconMoreVertical.vue')
    ),
    redo: defineAsyncComponent(() => import('@/icons/IconRedo.vue')),
    search: defineAsyncComponent(() => import('@/icons/IconSearch.vue')),
    setting: defineAsyncComponent(() => import('@/icons/IconSetting.vue')),
    'setting-outline': defineAsyncComponent(
      () => import('@/icons/IconSettingOutline.vue')
    ),
    show: defineAsyncComponent(() => import('@/icons/IconShow.vue')),
    trash: defineAsyncComponent(() => import('@/icons/IconTrash.vue')),
    user: defineAsyncComponent(() => import('@/icons/IconUser.vue')),
    warning: defineAsyncComponent(() => import('@/icons/IconWarning.vue')),
  },
  setup(props) {
    const style = computed<CSSProperties>(() => {
      if (!props.size && !props.color) return {};

      const size = props.size
        ? typeof props.size === 'string'
          ? props.size
          : `${props.size}px`
        : undefined;

      return {
        width: size,
        height: size,
        color: props.color,
      };
    });

    return { style };
  },
});
</script>

<template>
  <i class="icon" v-bind="$attrs" :style="style">
    <component :is="name" />
  </i>
</template>

<style lang="scss">
.icon {
  display: inline-flex;
  align-items: center;

  svg {
    width: inherit;
    height: inherit;
  }
}
</style>
