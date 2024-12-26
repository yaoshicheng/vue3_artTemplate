<template>
  <div class="page_container" style="margin-top: 12px;">
    <div style="font-size: 14px">Rewarded Video 激励视频【趣盟国内样式】</div>
    <van-button block round type="primary" @click="() => renderTemplate()"> 
      激励视频【趣盟】 
    </van-button>
    <div style="font-size: 14px">Rewarded Video 激励视频【Telegram 小程序样式】</div>
    <van-button block round type="primary" @click="renderRewardedQm1">
      激励视频【TMA】样式1 
    </van-button>
    <van-button block round type="primary" style="margin-top: 12px;" @click="renderRewardedQm1"> 
      激励视频【TMA】样式2
    </van-button>
  </div>
</template>
<script setup>
// import { renderRewardedQm1 } from '@/utils/render';
import { renderTemplate } from '@/templates/REWARDED_QM1/index';

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
