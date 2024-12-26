<template>
  <div class="page_container" style="margin-top: 12px;">
    
    <div style="font-size: 14px">Splash 开屏【趣盟国内样式】</div>
    <van-button block round type="primary" @click="() =>handleClick('qm')"> 
      开屏【趣盟】 
    </van-button>
    <div style="font-size: 14px">Splash 开屏 【Telegram 小程序样式】</div>
    <van-button block round type="primary" @click="handleClick('tma', 'SPLASH_DISPLAY_TYPE_1')">
      开屏【TMA】样式1
    </van-button>
    <van-button block round type="primary" @click="handleClick('tma', 'SPLASH_DISPLAY_TYPE_2')" style="margin-top: 12px;" > 
      开屏【TMA】样式2
    </van-button>
  </div>
</template>
<script setup>
//@ts-ignore
import { fetchAds } from '@qtt/adseye-vue3';
import { SPLASH_REQUEST } from '../mock/splash.js'

const handleClick = async (styleType = 'tma', adDisplayType = 'SPLASH_DISPLAY_TYPE_1') => {
  await fetchAds({
    type: 'splash', 
    styleType,
    adDisplayType, 
    params: SPLASH_REQUEST, 
    render:true, 
    container: 'body',
  });
}

</script>
<style>
@media (min-width: 1024px) {
  .page_container {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
