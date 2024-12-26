<template>
  <div class="page_container" style="margin-top: 12px;">
    <div style="font-size: 14px">Splash 开屏【趣盟国内样式】</div>
    <van-button block round type="primary" @click="() =>renderTemplate()"> 
      开屏【趣盟】 
    </van-button>
    <div style="font-size: 14px">Splash 开屏 【Telegram 小程序样式】</div>
    <van-button block round type="primary" @click="() =>renderTemplateTMA1()">
      开屏【TMA】样式1
    </van-button>
    <van-button block round type="primary" @click="() =>renderTemplateTMA2()" style="margin-top: 12px;" > 
      开屏【TMA】样式2
    </van-button>
  </div>
</template>
<script setup>
import { renderSplashQm, renderSplashTMA1, renderSplashTMA2 } from '@/utils/render';
import { renderTemplate } from '@/templates/Splash_QM1/index';
import { renderTemplate as renderTemplateTMA1 } from '@/templates/Splash_TMA1/index';
import { renderTemplate as renderTemplateTMA2 } from '@/templates/Splash_TMA2/index';

</script>
<style lang="less">
@media (min-width: 1024px) {
  .page_container {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>
