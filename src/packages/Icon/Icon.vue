<script lang="ts">
import {
  defineComponent,
  PropType,
  defineAsyncComponent,
  computed,
  CSSProperties,
} from 'vue';
import { iconList } from './iconList';

type IconType = typeof iconList[number];

export default defineComponent({
  props: {
    size: [Number, String],
    color: [String],
    name: String as PropType<IconType>,
  },
  components: {
    'arrow-down': defineAsyncComponent(
      () => import('@/icons/IconArrowDown.vue')
    ),
    'arrow-left': defineAsyncComponent(
      () => import('@/icons/IconArrowLeft.vue')
    ),
    'arrow-right': defineAsyncComponent(
      () => import('@/icons/IconArrowRight.vue')
    ),
    'arrow-top': defineAsyncComponent(() => import('@/icons/IconArrowTop.vue')),
    attachment: defineAsyncComponent(
      () => import('@/icons/IconAttachment.vue')
    ),
    bell: defineAsyncComponent(() => import('@/icons/IconBell.vue')),
    bookmark: defineAsyncComponent(() => import('@/icons/IconBookmark.vue')),
    browser: defineAsyncComponent(() => import('@/icons/IconBrowser.vue')),
    calendar: defineAsyncComponent(() => import('@/icons/IconCalendar.vue')),
    check: defineAsyncComponent(() => import('@/icons/IconCheck.vue')),
    'chevron-down': defineAsyncComponent(
      () => import('@/icons/IconChevronDown.vue')
    ),
    'chevron-left': defineAsyncComponent(
      () => import('@/icons/IconChevronLeft.vue')
    ),
    'chevron-right': defineAsyncComponent(
      () => import('@/icons/IconChevronRight.vue')
    ),
    'chevron-up': defineAsyncComponent(
      () => import('@/icons/IconChevronUp.vue')
    ),
    'circle-account': defineAsyncComponent(
      () => import('@/icons/IconCircleAccount.vue')
    ),
    'circle-arrow-down': defineAsyncComponent(
      () => import('@/icons/IconCircleArrowDown.vue')
    ),
    'circle-arrow-left': defineAsyncComponent(
      () => import('@/icons/IconCircleArrowLeft.vue')
    ),
    'circle-arrow-right': defineAsyncComponent(
      () => import('@/icons/IconCircleArrowRight.vue')
    ),
    'circle-arrow-top': defineAsyncComponent(
      () => import('@/icons/IconCircleArrowTop.vue')
    ),
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
    'circle-play': defineAsyncComponent(
      () => import('@/icons/IconCirclePlay.vue')
    ),
    'circle-play-pause': defineAsyncComponent(
      () => import('@/icons/IconCirclePlayPause.vue')
    ),
    'circle-play-stop': defineAsyncComponent(
      () => import('@/icons/IconCirclePlayStop.vue')
    ),
    'circle-play-track-next': defineAsyncComponent(
      () => import('@/icons/IconCirclePlayTrackNext.vue')
    ),
    'circle-play-track-prev': defineAsyncComponent(
      () => import('@/icons/IconCirclePlayTrackPrev.vue')
    ),
    'circle-plus': defineAsyncComponent(
      () => import('@/icons/IconCirclePlus.vue')
    ),
    'circle-plus-outline': defineAsyncComponent(
      () => import('@/icons/IconCirclePlusOutline.vue')
    ),
    clipboard: defineAsyncComponent(() => import('@/icons/IconClipboard.vue')),
    close: defineAsyncComponent(() => import('@/icons/IconClose.vue')),
    code: defineAsyncComponent(() => import('@/icons/IconCode.vue')),
    copy: defineAsyncComponent(() => import('@/icons/IconCopy.vue')),
    database: defineAsyncComponent(() => import('@/icons/IconDatabase.vue')),
    debug: defineAsyncComponent(() => import('@/icons/IconDebug.vue')),
    download: defineAsyncComponent(() => import('@/icons/IconDownload.vue')),
    'download-done': defineAsyncComponent(
      () => import('@/icons/IconDownloadDone.vue')
    ),
    duplicate: defineAsyncComponent(() => import('@/icons/IconDuplicate.vue')),
    edit: defineAsyncComponent(() => import('@/icons/IconEdit.vue')),
    enter: defineAsyncComponent(() => import('@/icons/IconEnter.vue')),
    error: defineAsyncComponent(() => import('@/icons/IconError.vue')),
    export: defineAsyncComponent(() => import('@/icons/IconExport.vue')),
    external: defineAsyncComponent(() => import('@/icons/IconExternal.vue')),
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
    identity: defineAsyncComponent(() => import('@/icons/IconIdentity.vue')),
    import: defineAsyncComponent(() => import('@/icons/IconImport.vue')),
    info: defineAsyncComponent(() => import('@/icons/IconInfo.vue')),
    logout: defineAsyncComponent(() => import('@/icons/IconLogout.vue')),
    mail: defineAsyncComponent(() => import('@/icons/IconMail.vue')),
    'more-horizontal': defineAsyncComponent(
      () => import('@/icons/IconMoreHorizontal.vue')
    ),
    'more-vertical': defineAsyncComponent(
      () => import('@/icons/IconMoreVertical.vue')
    ),
    notifications: defineAsyncComponent(
      () => import('@/icons/IconNotifications.vue')
    ),
    play: defineAsyncComponent(() => import('@/icons/IconPlay.vue')),
    'play-backwards': defineAsyncComponent(
      () => import('@/icons/IconPlayBackwards.vue')
    ),
    'play-forwards': defineAsyncComponent(
      () => import('@/icons/IconPlayForwards.vue')
    ),
    'play-list': defineAsyncComponent(() => import('@/icons/IconPlayList.vue')),
    'play-list-add': defineAsyncComponent(
      () => import('@/icons/IconPlayListAdd.vue')
    ),
    'play-list-search': defineAsyncComponent(
      () => import('@/icons/IconPlayListSearch.vue')
    ),
    'play-pause': defineAsyncComponent(
      () => import('@/icons/IconPlayPause.vue')
    ),
    'play-stop': defineAsyncComponent(() => import('@/icons/IconPlayStop.vue')),
    'play-track-next': defineAsyncComponent(
      () => import('@/icons/IconPlayTrackNext.vue')
    ),
    'play-track-prev': defineAsyncComponent(
      () => import('@/icons/IconPlayTrackPrev.vue')
    ),
    redo: defineAsyncComponent(() => import('@/icons/IconRedo.vue')),
    search: defineAsyncComponent(() => import('@/icons/IconSearch.vue')),
    setting: defineAsyncComponent(() => import('@/icons/IconSetting.vue')),
    'setting-outline': defineAsyncComponent(
      () => import('@/icons/IconSettingOutline.vue')
    ),
    share: defineAsyncComponent(() => import('@/icons/IconShare.vue')),
    'shopping-cart': defineAsyncComponent(
      () => import('@/icons/IconShoppingCart.vue')
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
  <i class="cs-icon" v-bind="$attrs" :style="style">
    <component :is="name" />
  </i>
</template>

<style lang="scss">
.cs-icon {
  display: inline-flex;
  align-items: center;

  svg {
    width: inherit;
    height: inherit;
  }
}
</style>
