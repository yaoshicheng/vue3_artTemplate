<template>
  <div class="page_container" style="margin-top: 12px;">
    <div style="font-size: 14px">INTERACTION 插屏【趣盟国内样式】</div>
    <van-button block round type="primary" @click="()=>renderTemplate()"> 
      插屏图文
    </van-button>
    <van-button block round type="primary" @click="() => renderTemplate2()" style="margin-top: 12px;"> 
      插屏视频
    </van-button>
    <van-button block round type="primary" @click="() => renderTemplate3()" style="margin-top: 12px;"> 
      插屏全屏
    </van-button>
    <div style="font-size: 14px">INTERACTION 插屏 【Telegram 小程序样式】</div>
    <van-button block round type="primary" @click="() => renderTemplateTMA1()">
      插屏视频【TMA】样式1
    </van-button>
    <!-- <van-button block round type="primary" @click="renderInteractionTMA1" style="margin-top: 12px;" > 
      插屏视频【TMA】样式1 图片
    </van-button>
    <van-button block round type="primary" @click="renderInteractionTMA1" style="margin-top: 12px;"> 
      插屏视频【TMA】样式2
    </van-button> -->
  </div>
</template>
<script setup>
// import { renderInteractionQm1, renderInteractionQm2, renderInteractionQm3, renderInteractionTMA1 } from '@/utils/render';
import { renderTemplate } from '@/templates/INTERACTION_QM1/index';
import { renderTemplate as renderTemplate2 } from '@/templates/INTERACTION_QM2/index';
import { renderTemplate as renderTemplate3 } from '@/templates/INTERACTION_QM3/index';
import { renderTemplate as renderTemplateTMA1 } from '@/templates/INTERACTION_TMA1/index';


</script>
<style lang="less">
@media (min-width: 1024px) {
  .page_container {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.app_desc_wrapper {
  color: #fff;
  // background: rgba(0,0,0, 0.02);
  background: #fff;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02);

  &_logo_container{
    width: 65px;
    height: 65px;
    border-radius: 16px;
  }

  &_content_container{
    margin-left: 12px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
  }

  &_app_name{
    font-size: 17px;
    font-weight: 600;
    color: #202020;
    // font-family:;
  }

  &_app_desc{
    font-size: 12px;
    color: #a7a7a7;
    display: -webkit-box;  /* 使用-webkit-box进行多行文本处理 */
    -webkit-line-clamp: 1; /* 设置显示的行数 */
    -webkit-box-orient: vertical; /* 垂直排列子元素 */
    overflow: hidden; /* 隐藏超出的内容 */
    text-overflow: ellipsis; /* 超出部分用省略号表示 */
  }

  &_icon_wrapper{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 24px;
    color: #aaa;
    width: 40px;
  }
}
</style>
