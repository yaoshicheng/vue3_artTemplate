<template>
  <div class="page_container" style="margin-top: 12px;">
    
    <div style="font-size: 14px">Rewarded Video 激励视频【趣盟国内样式】</div>
    <van-button block round type="primary" @click="() =>handleClick('qm')"> 
      激励视频【趣盟】 
    </van-button>
    <div style="font-size: 14px">Rewarded Video 激励视频【Telegram 小程序样式】</div>
    <van-button block round type="primary" @click="handleClick('tma', 'REWARDED_DISPLAY_TYPE_1')">
      激励视频【TMA】样式1 
    </van-button>
    <van-button block round type="primary" style="margin-top: 12px;" @click="handleClick('tma', 'REWARDED_DISPLAY_TYPE_2')"> 
      激励视频【TMA】样式2
    </van-button>
  </div>
</template>
<script setup>
//@ts-ignore
import { fetchAds } from '@qtt/adseye-vue3';
import { REWARDED_REQUEST } from '../mock/rewarded.js'

const handleClick = async (styleType = 'tma', adDisplayType = 'SPLASH_DISPLAY_TYPE_1') => {
  console.log(123, REWARDED_REQUEST)
  // alert(1)
  await fetchAds({
    type: 'rewarded', 
    styleType,
    adDisplayType, 
    params: REWARDED_REQUEST, 
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
