<script setup lang="ts">
import VBtn from '@/packages/button/v-btn.vue';

import VRow from '@/docs/components/container/row/v-row.vue';
import ButtonPageHeader from './button-page-header.vue';
import ButtonPageDemo1 from './button-page-demo1.vue';
</script>

<template>
  <div class="button-page">
    <button-page-header />

    <button-page-demo1
      title="Examples"
      description="いくつかの定義済みのボタンスタイルがあり, それぞれ目的を持っています。"
    />

    <button-page-demo1 title="Disabled Buttons" disabled>
      <template #description>
        <p>
          ボタンを非アクティブに見せるには、<code>button</code> 要素に
          <code>disabled</code> を追加します。
        </p>
      </template>
    </button-page-demo1>

    <button-page-demo1 title="Text Buttons" design="text">
      <template #description>
        <p>
          Text Buttonは
          <code>design="text"</code>
          を適用すると背景や外枠などの要素を持たないボタンを作成できます。
        </p>
        <p>
          Text
          Buttonは画面の内容とあまり関連がない場合や、注目度が高くない場合に使用します。
        </p>
      </template>
    </button-page-demo1>

    <button-page-demo1 title="Outline Buttons" design="outline">
      <template #description>
        <p>
          Outline Buttonは
          <code>design="outline"</code>
          を適用すると外枠を残して、背景色を透過したボタンを作成できます。
        </p>
        <p>
          Outline Buttonは、含まれるボタンの代わりに強調を弱めたり、テキスト
          ボタンの代わりに強調を強めたりすることもできます。
        </p>
      </template>
    </button-page-demo1>

    <button-page-demo1 title="Block Button">
      <template #description>
        <p>
          <code>fluid</code> を適用すると、親要素の幅に合わせることができます。
        </p>
      </template>

      <v-btn fluid>Button</v-btn>
    </button-page-demo1>

    <button-page-demo1 title="Round Button">
      <template #description>
        <p>
          <code>round</code>
          を適用すると、丸みを帯びたボタンを作成することができます。
        </p>
      </template>

      <v-row>
        <v-btn round theme="primary">Button</v-btn>
        <v-btn round theme="primary" design="text">Button</v-btn>
        <v-btn round theme="primary" design="outline">Button</v-btn>
      </v-row>
    </button-page-demo1>

    <button-page-demo1 title="Loading Button">
      <template #description>
        <p>
          <code>loading</code>
          を適用すると、ローディング状態を表示することができます。
        </p>
      </template>

      <v-row>
        <v-btn round theme="primary" loading>Button</v-btn>
        <v-btn round theme="primary" design="text" loading>Button</v-btn>
        <v-btn round theme="primary" design="outline" loading>Button</v-btn>
      </v-row>
    </button-page-demo1>
  </div>
</template>

<style lang="scss">
.button-page {
  .v-btn {
    margin: 0.5rem 0.125rem;
  }
}
</style>
