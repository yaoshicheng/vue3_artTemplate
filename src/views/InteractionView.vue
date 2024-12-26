<template>
  <div class="page_container" style="margin-top: 12px;">
    <div style="font-size: 14px">INTERACTION 插屏【趣盟国内样式】</div>
    <van-button block round type="primary" @click="handleClick('qm', 1)"> 
      插屏图文
    </van-button>
    <van-button block round type="primary" @click="handleClick('qm', 2)" style="margin-top: 12px;"> 
      插屏视频
    </van-button>
    <van-button block round type="primary" @click="handleClick('qm', 3)" style="margin-top: 12px;"> 
      插屏全屏
    </van-button>
    <div style="font-size: 14px">INTERACTION 插屏 【Telegram 小程序样式】</div>
    <van-button block round type="primary" @click="handleClick2('tma', 'INTERACTION_DISPLAY_TYPE_1')">
      插屏视频【TMA】样式1 视频
    </van-button>
    <van-button block round type="primary" @click="handleClick2('tma', 'INTERACTION_DISPLAY_TYPE_1')" style="margin-top: 12px;" > 
      插屏视频【TMA】样式1 图片
    </van-button>
    <van-button block round type="primary" @click="handleClick2('tma', 'INTERACTION_DISPLAY_TYPE_2')" style="margin-top: 12px;" > 
      插屏视频【TMA】样式2
    </van-button>
  </div>
</template>
<script setup>
//@ts-ignore
import { fetchAds } from '@qtt/adseye-vue3';
import { INTERACTION_REQUEST_IMAGE_TEXT, INTERACTION_REQUEST_VIDEO, INTERACTION_REQUEST_FULLSCREEN } from '@/mock/interaction.js'
const handleClick = async (styleType = 'tma', qmStyle) => {
  const params = qmStyle === 1 ? INTERACTION_REQUEST_IMAGE_TEXT : (qmStyle === 2 ? INTERACTION_REQUEST_VIDEO: INTERACTION_REQUEST_FULLSCREEN)
  await fetchAds({
    type: 'interaction', 
    styleType,
    params: params, 
    render:true, 
    container: 'body',
  });
}

const handleClick2 = async (styleType = 'tma', adDisplayType = 'INTERACTION_DISPLAY_TYPE_1') => {
  await fetchAds({
    type: 'interaction', 
    styleType,
    adDisplayType, 
    params: INTERACTION_REQUEST_IMAGE_TEXT, 
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
