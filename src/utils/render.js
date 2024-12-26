import { getFileType, getParams } from '@/utils/common';
import splashTma1Template from '../templates/commonTemplates/splashTma1.art?raw'; // ESM 导入 .art 文件为字符串
import splashTma2Template from '../templates/commonTemplates/splashTma2.art?raw'; // ESM 导入 .art 文件为字符串
import splashQmTemplate from '../templates/commonTemplates/splashQm.art?raw'; // ESM 导入 .art 文件为字符串


import interactionQm1Template from '../templates/commonTemplates/interactionQm1.art?raw'; // ESM 导入 .art 文件为字符串
import interactionQm2Template from '../templates/commonTemplates/interactionQm2.art?raw'; // ESM 导入 .art 文件为字符串
import interactionQm3Template from '../templates/commonTemplates/interactionQm3.art?raw'; // ESM 导入 .art 文件为字符串
import interactionTma1Template from '../templates/commonTemplates/interactionTma1.art?raw'; // ESM 导入 .art 文件为字符串


// import rewardedTma1Template from '../templates/commonTemplates/rewardedTma1.art?raw'; // ESM 导入 .art 文件为字符串
// import rewardedTma2Template from '../templates/commonTemplates/rewardedTma2.art?raw'; // ESM 导入 .art 文件为字符串
import rewardedQm1Template from '../templates/commonTemplates/rewardedQm1.art?raw'; // ESM 导入 .art 文件为字符串


import Shake from '../templates/assets/shake.png';
import Slide from '../templates/assets/slide.png';
import Fingerprint from '../templates/assets/fingerprint.png';
import Logo from '../templates/assets/logo.png';
import Download from '../templates/assets/download.png';
import GooglePlay from '../templates/assets/google-play.png';
import AppStore from '../templates/assets/app-store.png';
import Telegram from '../templates/assets/telegram.png';
import ArrowRight from '../templates/assets/arrow-right.png';
import Play from '../templates/assets/play.png';
import Volume from '../templates/assets/volume.png';
import Mute from '../templates/assets/mute.png';
import Redo from '../templates/assets/redo.png';

import * as artTemplate from 'art-template'; // ESM 导入 art-template

const renderSplashQm = ( ) => {
  const data = {
    "type": 2,
    "interaction_type": 1,
    "title": "burger-bar2",
    "desc": "Burger Bar is a fun simulation game where players create delicious burgers by selecting ingredients and serving customers quickly, with various levels and upgrades.",
    "url": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "c_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "width": 720,
    "height": 1280,
    "imp": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_imp\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_show/cpm?CAAQYw.h4zuivjlP14DEMlNnjE6LVEiEbBvuMjHXbTiLMxCKPEap1HYPXCFd-dzHvX7D8qbJ47xs21qexINI4RIF14yp1XmHL4u4hRMFL4CFL4_pD4Gb404R40Go40i0xOIW4z0Idx4uqIGh4404Gx4i44m4s4GP6497PpC7LzynaGb7aO-nbz_pvp5HbXCHLjsFLsCF1Gj7b44Q4hI401o4PjREMdyODRqK5GqOWHaQvXfOMlqnh9qO5pf7_mf7bgrQbjJnZ9Twvj9EP9aOZ9aw_VqQP-Tn_Xqn_jbEhUZp1ICp17Cph86HPgspPljnaT67LgsFvdjnbX9HvpCpDsDHLdsHP0_pu9ywb344xh04x144x1I4x174x1R4x1m4xh44yh04yhZ4y1y4y1N4yh4G4hIG4h0G4h7G4hRG4hyG414G41IG417G41oG41yG41mG4h4G0hIG0huG0GuB4xhz4G04BR1ggHz7044444444447xIi4MI7h44u4hR4pxjUAMCUAMCUA1xmVyB44zR4xxz46xBr0TGjH_zDp_z5HasmHLz9n1Bau6G6nPpZ7DXyHLxCpDdjpvIDp10VHaz_H1l6F1x5pa4V75I0nLETpDHTHD79F1XCFP0C7mIGI1zD7_0-7_pD7_zyH1GjHLjT7LpDn1I5pbzD7b05HLlssxzhh4v64ugTODBTKPHy7Z-67PHtnP9sKPBsOZ-TnMxfO_jJn_Byw5ljKL4ZJx7hz4K0Gx1oG6xDnap-H1sypZ-sH14-KL0-F1pf7bz5pZVZH_zV7DjsHDns7PzCpL4V"],
    "clk": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_click\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_click?CAAQWg.422p3J8xse2hmzxPi8m7t1m3mrFJpz8dqr-3tz05nsmCUedZsq5f_a_9dJqGhwurg2G0TveuW0cPc2Vcfe2KUeqHdt2p24Vzft25ft2QUh2Sr2I2V2IS62I3I0DcB29Ic_02pucS422I2S02322H2T2Ss72XGsU5Gt9KiCSrGCDair9QUJUjdrq5dt8TftT5feS8Gr22L24c2Ie62s8Vmz_KDhVunjSuDBdCLJqRDzxui4XuDjURGQHRGrlALr8giYX-kJ8XmsXCDYXCkQ1uLsa-iQquiQ8rm4MYUec5UeG5U4w7dslTUsx8iC-7GtlTfJ_8irqXdJU5UhThdt_TdsIQUpXKkrN2204I20e220ec20eG20eV20eH20422K4I2K4Y2KeK2KeP2K42S24cS24IS24GS24VS24KS2e2S2ecS2eGS2e6S2eKS2eHS242SI4cSI4pSISpF20492SI2FVelld9GI2222222222G0c32zcG422p24V2U08MOz5MOz5MOe0H1KF229V2009270FAI-S8dQ9hUQ9jdCTHdt9XieFCp7S7isUYGhqKdt05Uh_8UJchUeI1dC9Qdex7fe0jUC21GjcIitm-Uhd-dhGXfeq5fsI5GHcSce9hGQIaGQUhGQ9KdeS8dt8-GtUhiecjUr9hGrIjdtxTT09442J72pl-DhF-nsdKGYa7GsdoisXTnsFTDYa-iz0RDQ8giQFKkjx8nt2Yg0G492nIS0e6S70hiCUadeTKUYaTde2antIafeURGr9jUY1YdQ91Gh8TdhiTGs95Ut21"],
    "dp_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "dp_clk": ["https://million-api.aiclk.com/external/common/trace?t=dplink_click\u0026iclicashsid=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026opt_ideaid=0"],
    "app_name": "",
    "app_package": "",
    "app_information": {},
    "app_logo": "",
    "coin": 0,
    "idea_id": 522298437,
    "idea_id_str": "9ac1a10f0fb75fa60c76e159d99180eb",
    "title_sign": "1e3e4ec0b1fc1ceb1e536e4abc5093fc",
    "source_mark": "联盟•ia-adseye",
    "feature_id": "904827",
  }
    
  data.urlType = getFileType(data?.url);
  data.btn_text = getParams(data?.c_url)?.btn_text;
  data.shake_url =  Shake;
  data.slide_url = Slide;

  // 使用 art-template 编译模板
  const templateRender = artTemplate.compile(splashQmTemplate);
  const html = templateRender(data);

  const child = document.createElement('div');
  child.innerHTML = html;
  document.body.appendChild(child);
  
  // 处理跳过按钮
  const skipButton = document.getElementById('splash_skip_button');
  if(skipButton) {
    let _duration = Number(data.duration || 10);
    const interval = setInterval(() => {
      if(_duration > 0) {
        _duration -= 1;
        skipButton.innerHTML = ' ' + _duration;
      } else{
        skipButton.innerHTML = 'Skip';
        clearInterval(interval)
      }
    }, 1000);

    skipButton.addEventListener('click', function(){
      const splashEle = document.getElementById('splash_wrapper');
      if(splashEle){
        splashEle.remove();
        // document.body.removeChild(splashEle);
      }
    })
  }

  // 处理继续按钮
  const continueButton = document.getElementById('continue_button');
  if(continueButton) {
    continueButton.addEventListener('click', function(){
      if (data?.c_url) {
        window.open(data?.c_url, '_blank');
      }
    })
  }
}

const renderSplashTMA1 = ( ) => {
  const data = {
    "type": 2,
    "interaction_type": 1,
    "title": "burger-bar2",
    "desc": "Burger Bar is a fun simulation game where players create delicious burgers by selecting ingredients and serving customers quickly, with various levels and upgrades.",
    "url": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "c_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "width": 720,
    "height": 1280,
    "imp": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_imp\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_show/cpm?CAAQYw.h4zuivjlP14DEMlNnjE6LVEiEbBvuMjHXbTiLMxCKPEap1HYPXCFd-dzHvX7D8qbJ47xs21qexINI4RIF14yp1XmHL4u4hRMFL4CFL4_pD4Gb404R40Go40i0xOIW4z0Idx4uqIGh4404Gx4i44m4s4GP6497PpC7LzynaGb7aO-nbz_pvp5HbXCHLjsFLsCF1Gj7b44Q4hI401o4PjREMdyODRqK5GqOWHaQvXfOMlqnh9qO5pf7_mf7bgrQbjJnZ9Twvj9EP9aOZ9aw_VqQP-Tn_Xqn_jbEhUZp1ICp17Cph86HPgspPljnaT67LgsFvdjnbX9HvpCpDsDHLdsHP0_pu9ywb344xh04x144x1I4x174x1R4x1m4xh44yh04yhZ4y1y4y1N4yh4G4hIG4h0G4h7G4hRG4hyG414G41IG417G41oG41yG41mG4h4G0hIG0huG0GuB4xhz4G04BR1ggHz7044444444447xIi4MI7h44u4hR4pxjUAMCUAMCUA1xmVyB44zR4xxz46xBr0TGjH_zDp_z5HasmHLz9n1Bau6G6nPpZ7DXyHLxCpDdjpvIDp10VHaz_H1l6F1x5pa4V75I0nLETpDHTHD79F1XCFP0C7mIGI1zD7_0-7_pD7_zyH1GjHLjT7LpDn1I5pbzD7b05HLlssxzhh4v64ugTODBTKPHy7Z-67PHtnP9sKPBsOZ-TnMxfO_jJn_Byw5ljKL4ZJx7hz4K0Gx1oG6xDnap-H1sypZ-sH14-KL0-F1pf7bz5pZVZH_zV7DjsHDns7PzCpL4V"],
    "clk": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_click\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_click?CAAQWg.422p3J8xse2hmzxPi8m7t1m3mrFJpz8dqr-3tz05nsmCUedZsq5f_a_9dJqGhwurg2G0TveuW0cPc2Vcfe2KUeqHdt2p24Vzft25ft2QUh2Sr2I2V2IS62I3I0DcB29Ic_02pucS422I2S02322H2T2Ss72XGsU5Gt9KiCSrGCDair9QUJUjdrq5dt8TftT5feS8Gr22L24c2Ie62s8Vmz_KDhVunjSuDBdCLJqRDzxui4XuDjURGQHRGrlALr8giYX-kJ8XmsXCDYXCkQ1uLsa-iQquiQ8rm4MYUec5UeG5U4w7dslTUsx8iC-7GtlTfJ_8irqXdJU5UhThdt_TdsIQUpXKkrN2204I20e220ec20eG20eV20eH20422K4I2K4Y2KeK2KeP2K42S24cS24IS24GS24VS24KS2e2S2ecS2eGS2e6S2eKS2eHS242SI4cSI4pSISpF20492SI2FVelld9GI2222222222G0c32zcG422p24V2U08MOz5MOz5MOe0H1KF229V2009270FAI-S8dQ9hUQ9jdCTHdt9XieFCp7S7isUYGhqKdt05Uh_8UJchUeI1dC9Qdex7fe0jUC21GjcIitm-Uhd-dhGXfeq5fsI5GHcSce9hGQIaGQUhGQ9KdeS8dt8-GtUhiecjUr9hGrIjdtxTT09442J72pl-DhF-nsdKGYa7GsdoisXTnsFTDYa-iz0RDQ8giQFKkjx8nt2Yg0G492nIS0e6S70hiCUadeTKUYaTde2antIafeURGr9jUY1YdQ91Gh8TdhiTGs95Ut21"],
    "dp_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "dp_clk": ["https://million-api.aiclk.com/external/common/trace?t=dplink_click\u0026iclicashsid=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026opt_ideaid=0"],
    "app_name": "",
    "app_package": "",
    "app_information": {},
    "app_logo": "",
    "coin": 0,
    "idea_id": 522298437,
    "idea_id_str": "9ac1a10f0fb75fa60c76e159d99180eb",
    "title_sign": "1e3e4ec0b1fc1ceb1e536e4abc5093fc",
    "source_mark": "联盟•ia-adseye",
    "feature_id": "904827",
  }
    
  data.urlType = getFileType(data?.url);
  data.btn_text = getParams(data?.c_url)?.btn_text;

  // 使用 art-template 编译模板
  const templateRender = artTemplate.compile(splashTma1Template);
  const html = templateRender(data);

  const child = document.createElement('div');
  child.innerHTML = html;
  document.body.appendChild(child);
  
  // 处理跳过按钮
  const skipButton = document.getElementById('splash_skip_button');
  if(skipButton) {
    let _duration = Number(data.duration || 10);
    const interval = setInterval(() => {
      if(_duration > 0) {
        _duration -= 1;
        skipButton.innerHTML = ' ' + _duration;
      } else{
        skipButton.innerHTML = 'Skip';
        clearInterval(interval)
      }
    }, 1000);

    skipButton.addEventListener('click', function(){
      const splashEle = document.getElementById('splash1_wrapper');
      if(splashEle){
        splashEle.remove();
        // document.body.removeChild(splashEle);
      }
    })
  }

  // 处理继续按钮
  const continueButton = document.getElementById('continue_button');
  if(continueButton) {
    continueButton.addEventListener('click', function(){
      if (data?.c_url) {
        window.open(data?.c_url, '_blank');
      }
    })
  }
}

const renderSplashTMA2 = ( ) => {
  const data = {
    "type": 2,
    "interaction_type": 1,
    "title": "burger-bar2",
    "desc": "Burger Bar is a fun simulation game where players create delicious burgers by selecting ingredients and serving customers quickly, with various levels and upgrades.",
    "url": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "c_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "width": 720,
    "height": 1280,
    "imp": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_imp\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_show/cpm?CAAQYw.h4zuivjlP14DEMlNnjE6LVEiEbBvuMjHXbTiLMxCKPEap1HYPXCFd-dzHvX7D8qbJ47xs21qexINI4RIF14yp1XmHL4u4hRMFL4CFL4_pD4Gb404R40Go40i0xOIW4z0Idx4uqIGh4404Gx4i44m4s4GP6497PpC7LzynaGb7aO-nbz_pvp5HbXCHLjsFLsCF1Gj7b44Q4hI401o4PjREMdyODRqK5GqOWHaQvXfOMlqnh9qO5pf7_mf7bgrQbjJnZ9Twvj9EP9aOZ9aw_VqQP-Tn_Xqn_jbEhUZp1ICp17Cph86HPgspPljnaT67LgsFvdjnbX9HvpCpDsDHLdsHP0_pu9ywb344xh04x144x1I4x174x1R4x1m4xh44yh04yhZ4y1y4y1N4yh4G4hIG4h0G4h7G4hRG4hyG414G41IG417G41oG41yG41mG4h4G0hIG0huG0GuB4xhz4G04BR1ggHz7044444444447xIi4MI7h44u4hR4pxjUAMCUAMCUA1xmVyB44zR4xxz46xBr0TGjH_zDp_z5HasmHLz9n1Bau6G6nPpZ7DXyHLxCpDdjpvIDp10VHaz_H1l6F1x5pa4V75I0nLETpDHTHD79F1XCFP0C7mIGI1zD7_0-7_pD7_zyH1GjHLjT7LpDn1I5pbzD7b05HLlssxzhh4v64ugTODBTKPHy7Z-67PHtnP9sKPBsOZ-TnMxfO_jJn_Byw5ljKL4ZJx7hz4K0Gx1oG6xDnap-H1sypZ-sH14-KL0-F1pf7bz5pZVZH_zV7DjsHDns7PzCpL4V"],
    "clk": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_click\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_click?CAAQWg.422p3J8xse2hmzxPi8m7t1m3mrFJpz8dqr-3tz05nsmCUedZsq5f_a_9dJqGhwurg2G0TveuW0cPc2Vcfe2KUeqHdt2p24Vzft25ft2QUh2Sr2I2V2IS62I3I0DcB29Ic_02pucS422I2S02322H2T2Ss72XGsU5Gt9KiCSrGCDair9QUJUjdrq5dt8TftT5feS8Gr22L24c2Ie62s8Vmz_KDhVunjSuDBdCLJqRDzxui4XuDjURGQHRGrlALr8giYX-kJ8XmsXCDYXCkQ1uLsa-iQquiQ8rm4MYUec5UeG5U4w7dslTUsx8iC-7GtlTfJ_8irqXdJU5UhThdt_TdsIQUpXKkrN2204I20e220ec20eG20eV20eH20422K4I2K4Y2KeK2KeP2K42S24cS24IS24GS24VS24KS2e2S2ecS2eGS2e6S2eKS2eHS242SI4cSI4pSISpF20492SI2FVelld9GI2222222222G0c32zcG422p24V2U08MOz5MOz5MOe0H1KF229V2009270FAI-S8dQ9hUQ9jdCTHdt9XieFCp7S7isUYGhqKdt05Uh_8UJchUeI1dC9Qdex7fe0jUC21GjcIitm-Uhd-dhGXfeq5fsI5GHcSce9hGQIaGQUhGQ9KdeS8dt8-GtUhiecjUr9hGrIjdtxTT09442J72pl-DhF-nsdKGYa7GsdoisXTnsFTDYa-iz0RDQ8giQFKkjx8nt2Yg0G492nIS0e6S70hiCUadeTKUYaTde2antIafeURGr9jUY1YdQ91Gh8TdhiTGs95Ut21"],
    "dp_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "dp_clk": ["https://million-api.aiclk.com/external/common/trace?t=dplink_click\u0026iclicashsid=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026opt_ideaid=0"],
    "app_name": "",
    "app_package": "",
    "app_information": {},
    "app_logo": "",
    "coin": 0,
    "idea_id": 522298437,
    "idea_id_str": "9ac1a10f0fb75fa60c76e159d99180eb",
    "title_sign": "1e3e4ec0b1fc1ceb1e536e4abc5093fc",
    "source_mark": "联盟•ia-adseye",
    "feature_id": "904827",
  }
    
  data.urlType = getFileType(data?.url);
  data.btn_text = getParams(data?.c_url)?.btn_text;

  // 使用 art-template 编译模板
  const templateRender = artTemplate.compile(splashTma2Template);
  const html = templateRender(data);

  const child = document.createElement('div');
  child.innerHTML = html;
  document.body.appendChild(child);
  
  // 处理跳过按钮
  const skipButton = document.getElementById('splash_skip_button');
  if(skipButton) {
    const skipText = document.getElementById('splash_skip_text');
    let _duration = Number(data.duration || 10);
    const interval = setInterval(() => {
      if(_duration > 0) {
        _duration -= 1;
        skipText.innerHTML = ' ' + _duration;
      } else{
        clearInterval(interval)
      }
    }, 1000);
    skipButton.addEventListener('click', function(){
      const splashEle = document.getElementById('splash2_wrappper');
      if(splashEle){
        splashEle.remove();
      }
    })
  }

  // 处理继续按钮
  const continueButton = document.getElementById('continue_button');
  if(continueButton) {
    continueButton.addEventListener('click', function(){
      if (data?.c_url) {
        window.open(data?.c_url, '_blank');
      }
    })
  }
}

const renderInteractionTMA1 = ( ) => {
  const data = {
    "type": 2,
    "interaction_type": 1,
    "title": "burger-bar2",
    "desc": "Burger Bar is a fun simulation game where players create delicious burgers by selecting ingredients and serving customers quickly, with various levels and upgrades.",
    "url": "https://video-cdn.adseye.com/game/2048skill-edition-20241023.mov",
    "c_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "width": 720,
    "height": 1280,
    "imp": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_imp\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_show/cpm?CAAQYw.h4zuivjlP14DEMlNnjE6LVEiEbBvuMjHXbTiLMxCKPEap1HYPXCFd-dzHvX7D8qbJ47xs21qexINI4RIF14yp1XmHL4u4hRMFL4CFL4_pD4Gb404R40Go40i0xOIW4z0Idx4uqIGh4404Gx4i44m4s4GP6497PpC7LzynaGb7aO-nbz_pvp5HbXCHLjsFLsCF1Gj7b44Q4hI401o4PjREMdyODRqK5GqOWHaQvXfOMlqnh9qO5pf7_mf7bgrQbjJnZ9Twvj9EP9aOZ9aw_VqQP-Tn_Xqn_jbEhUZp1ICp17Cph86HPgspPljnaT67LgsFvdjnbX9HvpCpDsDHLdsHP0_pu9ywb344xh04x144x1I4x174x1R4x1m4xh44yh04yhZ4y1y4y1N4yh4G4hIG4h0G4h7G4hRG4hyG414G41IG417G41oG41yG41mG4h4G0hIG0huG0GuB4xhz4G04BR1ggHz7044444444447xIi4MI7h44u4hR4pxjUAMCUAMCUA1xmVyB44zR4xxz46xBr0TGjH_zDp_z5HasmHLz9n1Bau6G6nPpZ7DXyHLxCpDdjpvIDp10VHaz_H1l6F1x5pa4V75I0nLETpDHTHD79F1XCFP0C7mIGI1zD7_0-7_pD7_zyH1GjHLjT7LpDn1I5pbzD7b05HLlssxzhh4v64ugTODBTKPHy7Z-67PHtnP9sKPBsOZ-TnMxfO_jJn_Byw5ljKL4ZJx7hz4K0Gx1oG6xDnap-H1sypZ-sH14-KL0-F1pf7bz5pZVZH_zV7DjsHDns7PzCpL4V"],
    "clk": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_click\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_click?CAAQWg.422p3J8xse2hmzxPi8m7t1m3mrFJpz8dqr-3tz05nsmCUedZsq5f_a_9dJqGhwurg2G0TveuW0cPc2Vcfe2KUeqHdt2p24Vzft25ft2QUh2Sr2I2V2IS62I3I0DcB29Ic_02pucS422I2S02322H2T2Ss72XGsU5Gt9KiCSrGCDair9QUJUjdrq5dt8TftT5feS8Gr22L24c2Ie62s8Vmz_KDhVunjSuDBdCLJqRDzxui4XuDjURGQHRGrlALr8giYX-kJ8XmsXCDYXCkQ1uLsa-iQquiQ8rm4MYUec5UeG5U4w7dslTUsx8iC-7GtlTfJ_8irqXdJU5UhThdt_TdsIQUpXKkrN2204I20e220ec20eG20eV20eH20422K4I2K4Y2KeK2KeP2K42S24cS24IS24GS24VS24KS2e2S2ecS2eGS2e6S2eKS2eHS242SI4cSI4pSISpF20492SI2FVelld9GI2222222222G0c32zcG422p24V2U08MOz5MOz5MOe0H1KF229V2009270FAI-S8dQ9hUQ9jdCTHdt9XieFCp7S7isUYGhqKdt05Uh_8UJchUeI1dC9Qdex7fe0jUC21GjcIitm-Uhd-dhGXfeq5fsI5GHcSce9hGQIaGQUhGQ9KdeS8dt8-GtUhiecjUr9hGrIjdtxTT09442J72pl-DhF-nsdKGYa7GsdoisXTnsFTDYa-iz0RDQ8giQFKkjx8nt2Yg0G492nIS0e6S70hiCUadeTKUYaTde2antIafeURGr9jUY1YdQ91Gh8TdhiTGs95Ut21"],
    "dp_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "dp_clk": ["https://million-api.aiclk.com/external/common/trace?t=dplink_click\u0026iclicashsid=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026opt_ideaid=0"],
    "app_name": "",
    "app_package": "",
    "app_information": {},
    "app_logo": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "coin": 0,
    "idea_id": 522298437,
    "idea_id_str": "9ac1a10f0fb75fa60c76e159d99180eb",
    "title_sign": "1e3e4ec0b1fc1ceb1e536e4abc5093fc",
    "source_mark": "联盟•ia-adseye",
    "feature_id": "904827",
  }
    
  data.urlType = getFileType(data?.url);
  data.btn_text = getParams(data?.c_url)?.btn_text;
  data.fingerprint_url = Fingerprint;
  data.play_url = Play;
  const ads_type = getParams(data?.c_url)?.ads_type;
  if (ads_type === 'googleplay' || ads_type === 'applestore'){
    data.adType_url = ads_type === 'googleplay' ? GooglePlay : AppStore;
    data.adType_text = ads_type === 'googleplay' ? 'Google Play' : 'App Store';
    data.adAction_url = Download;
  } else if (ads_type === 'tme'){
    data.adType_url = Telegram;
    data.adType_text = "Telegram";
    data.adAction_url = ArrowRight;
  } else {
    data.adType_url = Logo;
    data.adType_text = "AdsEye";
    data.adAction_url = ArrowRight;
  }

  // 使用 art-template 编译模板
  const templateRender = artTemplate.compile(interactionTma1Template);
  const html = templateRender(data);

  const child = document.createElement('div');
  child.innerHTML = html;
  document.body.appendChild(child);
  
  // 处理跳过按钮
  const skipButton = document.getElementById('interaction_skip_button');
  if(skipButton) {
    skipButton.addEventListener('click', function(){
      const splashEle = document.getElementById('tma_rewarded_wrapper');
      if(splashEle){
        splashEle.remove();
      }
    })
  }

  // 处理继续按钮
  const continueButton = document.getElementById('continue_button');
  if(continueButton) {
    continueButton.addEventListener('click', function(){
      if (data?.c_url) {
        window.open(data?.c_url, '_blank');
      }
    })
  }

  // 视频能播放事件
  const handleCanPlay = () => {
    const videoRef = document.getElementById('videoRef');
    videoRef.play();
  };

  // 视频播放结束回调
  const handleEnded = () => {
    const playButtonRef = document.getElementById('playButtonRef');
    playButtonRef.style.display = 'flex';
  };

  const handlePause = () => {
    const videoRef = document.getElementById('videoRef');
    console.log(1111, videoRef.paused)
    if(videoRef){
      if(videoRef.paused){
        videoRef.play();
        const playButtonRef = document.getElementById('playButtonRef');
        playButtonRef.style.display = 'none';
      } else {
        videoRef.pause();
        const playButtonRef = document.getElementById('playButtonRef');
        playButtonRef.style.display = 'flex';
      }
    }
  }

  const handlePlay = () => {
    const playButtonRef = document.getElementById('playButtonRef');
    const videoRef = document.getElementById('videoRef');
    if(playButtonRef && videoRef){
      playButtonRef.style.display = 'none';
      videoRef.play();
      videoRef.muted = false;
    }
  }

  // 处理继续按钮
  const videoRef = document.getElementById('videoRef');
  if(videoRef) {
    videoRef.addEventListener('canplay', handleCanPlay);
    videoRef.addEventListener('ended', handleEnded);
    videoRef.addEventListener('click', handlePause);
  }

  // 处理继续按钮
  const playButtonRef = document.getElementById('playButtonRef');
  if(playButtonRef) {
    playButtonRef.addEventListener('click', handlePlay);
  }
}

const renderInteractionQm1 = ( ) => {
  const data = {
    "type": 2,
    "interaction_type": 1,
    "title": "burger-bar2",
    "desc": "Burger Bar is a fun simulation game where players create delicious burgers by selecting ingredients and serving customers quickly, with various levels and upgrades.",
    "url": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "c_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "width": 720,
    "height": 1280,
    "imp": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_imp\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_show/cpm?CAAQYw.h4zuivjlP14DEMlNnjE6LVEiEbBvuMjHXbTiLMxCKPEap1HYPXCFd-dzHvX7D8qbJ47xs21qexINI4RIF14yp1XmHL4u4hRMFL4CFL4_pD4Gb404R40Go40i0xOIW4z0Idx4uqIGh4404Gx4i44m4s4GP6497PpC7LzynaGb7aO-nbz_pvp5HbXCHLjsFLsCF1Gj7b44Q4hI401o4PjREMdyODRqK5GqOWHaQvXfOMlqnh9qO5pf7_mf7bgrQbjJnZ9Twvj9EP9aOZ9aw_VqQP-Tn_Xqn_jbEhUZp1ICp17Cph86HPgspPljnaT67LgsFvdjnbX9HvpCpDsDHLdsHP0_pu9ywb344xh04x144x1I4x174x1R4x1m4xh44yh04yhZ4y1y4y1N4yh4G4hIG4h0G4h7G4hRG4hyG414G41IG417G41oG41yG41mG4h4G0hIG0huG0GuB4xhz4G04BR1ggHz7044444444447xIi4MI7h44u4hR4pxjUAMCUAMCUA1xmVyB44zR4xxz46xBr0TGjH_zDp_z5HasmHLz9n1Bau6G6nPpZ7DXyHLxCpDdjpvIDp10VHaz_H1l6F1x5pa4V75I0nLETpDHTHD79F1XCFP0C7mIGI1zD7_0-7_pD7_zyH1GjHLjT7LpDn1I5pbzD7b05HLlssxzhh4v64ugTODBTKPHy7Z-67PHtnP9sKPBsOZ-TnMxfO_jJn_Byw5ljKL4ZJx7hz4K0Gx1oG6xDnap-H1sypZ-sH14-KL0-F1pf7bz5pZVZH_zV7DjsHDns7PzCpL4V"],
    "clk": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_click\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_click?CAAQWg.422p3J8xse2hmzxPi8m7t1m3mrFJpz8dqr-3tz05nsmCUedZsq5f_a_9dJqGhwurg2G0TveuW0cPc2Vcfe2KUeqHdt2p24Vzft25ft2QUh2Sr2I2V2IS62I3I0DcB29Ic_02pucS422I2S02322H2T2Ss72XGsU5Gt9KiCSrGCDair9QUJUjdrq5dt8TftT5feS8Gr22L24c2Ie62s8Vmz_KDhVunjSuDBdCLJqRDzxui4XuDjURGQHRGrlALr8giYX-kJ8XmsXCDYXCkQ1uLsa-iQquiQ8rm4MYUec5UeG5U4w7dslTUsx8iC-7GtlTfJ_8irqXdJU5UhThdt_TdsIQUpXKkrN2204I20e220ec20eG20eV20eH20422K4I2K4Y2KeK2KeP2K42S24cS24IS24GS24VS24KS2e2S2ecS2eGS2e6S2eKS2eHS242SI4cSI4pSISpF20492SI2FVelld9GI2222222222G0c32zcG422p24V2U08MOz5MOz5MOe0H1KF229V2009270FAI-S8dQ9hUQ9jdCTHdt9XieFCp7S7isUYGhqKdt05Uh_8UJchUeI1dC9Qdex7fe0jUC21GjcIitm-Uhd-dhGXfeq5fsI5GHcSce9hGQIaGQUhGQ9KdeS8dt8-GtUhiecjUr9hGrIjdtxTT09442J72pl-DhF-nsdKGYa7GsdoisXTnsFTDYa-iz0RDQ8giQFKkjx8nt2Yg0G492nIS0e6S70hiCUadeTKUYaTde2antIafeURGr9jUY1YdQ91Gh8TdhiTGs95Ut21"],
    "dp_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "dp_clk": ["https://million-api.aiclk.com/external/common/trace?t=dplink_click\u0026iclicashsid=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026opt_ideaid=0"],
    "app_name": "",
    "app_package": "",
    "app_information": {},
    "app_logo": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "coin": 0,
    "idea_id": 522298437,
    "idea_id_str": "9ac1a10f0fb75fa60c76e159d99180eb",
    "title_sign": "1e3e4ec0b1fc1ceb1e536e4abc5093fc",
    "source_mark": "联盟•ia-adseye",
    "feature_id": "904827",
  }
    
  data.ad_Logo_url = Logo;

  // 使用 art-template 编译模板
  const templateRender = artTemplate.compile(interactionQm1Template);
  const html = templateRender(data);

  const child = document.createElement('div');
  child.innerHTML = html;
  document.body.appendChild(child);
  
  // 处理跳过按钮
  const skipButton = document.getElementById('interaction_skip_button');
  if(skipButton) {
    skipButton.addEventListener('click', function(){
      const splashEle = document.getElementById('interation_modal_wrapper');
      if(splashEle){
        splashEle.remove();
      }
    })
  }

  // 处理继续按钮
  const continueButton = document.getElementById('continue_button');
  if(continueButton) {
    continueButton.addEventListener('click', function(){
      if (data?.c_url) {
        window.open(data?.c_url, '_blank');
      }
    })
  }
}

const renderInteractionQm2 = ( ) => {
  const data = {
    "type": 2,
    "interaction_type": 1,
    "title": "burger-bar2",
    "desc": "Burger Bar is a fun simulation game where players create delicious burgers by selecting ingredients and serving customers quickly, with various levels and upgrades.",
    "url": "https://video-cdn.adseye.com/game/2048skill-edition-20241023.mov",
    "c_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "width": 720,
    "height": 1280,
    "imp": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_imp\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_show/cpm?CAAQYw.h4zuivjlP14DEMlNnjE6LVEiEbBvuMjHXbTiLMxCKPEap1HYPXCFd-dzHvX7D8qbJ47xs21qexINI4RIF14yp1XmHL4u4hRMFL4CFL4_pD4Gb404R40Go40i0xOIW4z0Idx4uqIGh4404Gx4i44m4s4GP6497PpC7LzynaGb7aO-nbz_pvp5HbXCHLjsFLsCF1Gj7b44Q4hI401o4PjREMdyODRqK5GqOWHaQvXfOMlqnh9qO5pf7_mf7bgrQbjJnZ9Twvj9EP9aOZ9aw_VqQP-Tn_Xqn_jbEhUZp1ICp17Cph86HPgspPljnaT67LgsFvdjnbX9HvpCpDsDHLdsHP0_pu9ywb344xh04x144x1I4x174x1R4x1m4xh44yh04yhZ4y1y4y1N4yh4G4hIG4h0G4h7G4hRG4hyG414G41IG417G41oG41yG41mG4h4G0hIG0huG0GuB4xhz4G04BR1ggHz7044444444447xIi4MI7h44u4hR4pxjUAMCUAMCUA1xmVyB44zR4xxz46xBr0TGjH_zDp_z5HasmHLz9n1Bau6G6nPpZ7DXyHLxCpDdjpvIDp10VHaz_H1l6F1x5pa4V75I0nLETpDHTHD79F1XCFP0C7mIGI1zD7_0-7_pD7_zyH1GjHLjT7LpDn1I5pbzD7b05HLlssxzhh4v64ugTODBTKPHy7Z-67PHtnP9sKPBsOZ-TnMxfO_jJn_Byw5ljKL4ZJx7hz4K0Gx1oG6xDnap-H1sypZ-sH14-KL0-F1pf7bz5pZVZH_zV7DjsHDns7PzCpL4V"],
    "clk": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_click\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_click?CAAQWg.422p3J8xse2hmzxPi8m7t1m3mrFJpz8dqr-3tz05nsmCUedZsq5f_a_9dJqGhwurg2G0TveuW0cPc2Vcfe2KUeqHdt2p24Vzft25ft2QUh2Sr2I2V2IS62I3I0DcB29Ic_02pucS422I2S02322H2T2Ss72XGsU5Gt9KiCSrGCDair9QUJUjdrq5dt8TftT5feS8Gr22L24c2Ie62s8Vmz_KDhVunjSuDBdCLJqRDzxui4XuDjURGQHRGrlALr8giYX-kJ8XmsXCDYXCkQ1uLsa-iQquiQ8rm4MYUec5UeG5U4w7dslTUsx8iC-7GtlTfJ_8irqXdJU5UhThdt_TdsIQUpXKkrN2204I20e220ec20eG20eV20eH20422K4I2K4Y2KeK2KeP2K42S24cS24IS24GS24VS24KS2e2S2ecS2eGS2e6S2eKS2eHS242SI4cSI4pSISpF20492SI2FVelld9GI2222222222G0c32zcG422p24V2U08MOz5MOz5MOe0H1KF229V2009270FAI-S8dQ9hUQ9jdCTHdt9XieFCp7S7isUYGhqKdt05Uh_8UJchUeI1dC9Qdex7fe0jUC21GjcIitm-Uhd-dhGXfeq5fsI5GHcSce9hGQIaGQUhGQ9KdeS8dt8-GtUhiecjUr9hGrIjdtxTT09442J72pl-DhF-nsdKGYa7GsdoisXTnsFTDYa-iz0RDQ8giQFKkjx8nt2Yg0G492nIS0e6S70hiCUadeTKUYaTde2antIafeURGr9jUY1YdQ91Gh8TdhiTGs95Ut21"],
    "dp_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "dp_clk": ["https://million-api.aiclk.com/external/common/trace?t=dplink_click\u0026iclicashsid=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026opt_ideaid=0"],
    "app_name": "",
    "app_package": "",
    "app_information": {},
    "app_logo": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "coin": 0,
    "idea_id": 522298437,
    "idea_id_str": "9ac1a10f0fb75fa60c76e159d99180eb",
    "title_sign": "1e3e4ec0b1fc1ceb1e536e4abc5093fc",
    "source_mark": "联盟•ia-adseye",
    "feature_id": "904827",
  }
  data.urlType = getFileType(data?.url);
  data.ad_Logo_url = Logo;

  // 使用 art-template 编译模板
  const templateRender = artTemplate.compile(interactionQm2Template);
  const html = templateRender(data);

  const child = document.createElement('div');
  child.innerHTML = html;
  document.body.appendChild(child);
  
  // 处理跳过按钮
  const skipButton = document.getElementById('interaction_skip_button');
  if(skipButton) {
    let _duration = Number(data.duration || 15);
    const interval = setInterval(() => {
      if(_duration > 0) {
        _duration -= 1;
        skipButton.innerHTML = ' ' + _duration;
      } else{
        skipButton.innerHTML = 'Skip';
        clearInterval(interval)
      }
    }, 1000);
    skipButton.addEventListener('click', function(){
      const splashEle = document.getElementById('interation_modal_wrapper');
      if(splashEle){
        splashEle.remove();
      }
    })
  }

  // 处理继续按钮
  const continueButton = document.getElementById('continue_button');
  if(continueButton) {
    continueButton.addEventListener('click', function(){
      if (data?.c_url) {
        window.open(data?.c_url, '_blank');
      }
    })
  }

  // 视频能播放事件
  const handleCanPlay = () => {
    const videoRef = document.getElementById('videoRef');
    videoRef.play();
  };

  // 视频播放结束回调
  const handleEnded = () => {
    const playButtonRef = document.getElementById('playButtonRef');
    playButtonRef.style.display = 'flex';
  };

  const handlePause = () => {
    const videoRef = document.getElementById('videoRef');
    if(videoRef){
      if(videoRef.paused){
        videoRef.play();
        const playButtonRef = document.getElementById('playButtonRef');
        playButtonRef.style.display = 'none';
      } else {
        videoRef.pause();
        const playButtonRef = document.getElementById('playButtonRef');
        playButtonRef.style.display = 'flex';
      }
    }
  }

  const handlePlay = () => {
    const playButtonRef = document.getElementById('playButtonRef');
    const videoRef = document.getElementById('videoRef');
    if(playButtonRef && videoRef){
      playButtonRef.style.display = 'none';
      videoRef.play();
      videoRef.muted = false;
    }
  }

  // 处理继续按钮
  const videoRef = document.getElementById('videoRef');
  if(videoRef) {
    videoRef.addEventListener('canplay', handleCanPlay);
    videoRef.addEventListener('ended', handleEnded);
    videoRef.addEventListener('click', handlePause);
  }

  // 处理继续按钮
  const playButtonRef = document.getElementById('playButtonRef');
  if(playButtonRef) {
    playButtonRef.addEventListener('click', handlePlay);
  }
}

const renderInteractionQm3 = ( ) => {
  const data = {
    "type": 2,
    "interaction_type": 1,
    "title": "burger-bar2",
    "desc": "Burger Bar is a fun simulation game where players create delicious burgers by selecting ingredients and serving customers quickly, with various levels and upgrades.",
    "url": "https://video-cdn.adseye.com/game/2048skill-edition-20241023.mov",
    "c_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "width": 720,
    "height": 1280,
    "imp": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_imp\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_show/cpm?CAAQYw.h4zuivjlP14DEMlNnjE6LVEiEbBvuMjHXbTiLMxCKPEap1HYPXCFd-dzHvX7D8qbJ47xs21qexINI4RIF14yp1XmHL4u4hRMFL4CFL4_pD4Gb404R40Go40i0xOIW4z0Idx4uqIGh4404Gx4i44m4s4GP6497PpC7LzynaGb7aO-nbz_pvp5HbXCHLjsFLsCF1Gj7b44Q4hI401o4PjREMdyODRqK5GqOWHaQvXfOMlqnh9qO5pf7_mf7bgrQbjJnZ9Twvj9EP9aOZ9aw_VqQP-Tn_Xqn_jbEhUZp1ICp17Cph86HPgspPljnaT67LgsFvdjnbX9HvpCpDsDHLdsHP0_pu9ywb344xh04x144x1I4x174x1R4x1m4xh44yh04yhZ4y1y4y1N4yh4G4hIG4h0G4h7G4hRG4hyG414G41IG417G41oG41yG41mG4h4G0hIG0huG0GuB4xhz4G04BR1ggHz7044444444447xIi4MI7h44u4hR4pxjUAMCUAMCUA1xmVyB44zR4xxz46xBr0TGjH_zDp_z5HasmHLz9n1Bau6G6nPpZ7DXyHLxCpDdjpvIDp10VHaz_H1l6F1x5pa4V75I0nLETpDHTHD79F1XCFP0C7mIGI1zD7_0-7_pD7_zyH1GjHLjT7LpDn1I5pbzD7b05HLlssxzhh4v64ugTODBTKPHy7Z-67PHtnP9sKPBsOZ-TnMxfO_jJn_Byw5ljKL4ZJx7hz4K0Gx1oG6xDnap-H1sypZ-sH14-KL0-F1pf7bz5pZVZH_zV7DjsHDns7PzCpL4V"],
    "clk": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_click\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_click?CAAQWg.422p3J8xse2hmzxPi8m7t1m3mrFJpz8dqr-3tz05nsmCUedZsq5f_a_9dJqGhwurg2G0TveuW0cPc2Vcfe2KUeqHdt2p24Vzft25ft2QUh2Sr2I2V2IS62I3I0DcB29Ic_02pucS422I2S02322H2T2Ss72XGsU5Gt9KiCSrGCDair9QUJUjdrq5dt8TftT5feS8Gr22L24c2Ie62s8Vmz_KDhVunjSuDBdCLJqRDzxui4XuDjURGQHRGrlALr8giYX-kJ8XmsXCDYXCkQ1uLsa-iQquiQ8rm4MYUec5UeG5U4w7dslTUsx8iC-7GtlTfJ_8irqXdJU5UhThdt_TdsIQUpXKkrN2204I20e220ec20eG20eV20eH20422K4I2K4Y2KeK2KeP2K42S24cS24IS24GS24VS24KS2e2S2ecS2eGS2e6S2eKS2eHS242SI4cSI4pSISpF20492SI2FVelld9GI2222222222G0c32zcG422p24V2U08MOz5MOz5MOe0H1KF229V2009270FAI-S8dQ9hUQ9jdCTHdt9XieFCp7S7isUYGhqKdt05Uh_8UJchUeI1dC9Qdex7fe0jUC21GjcIitm-Uhd-dhGXfeq5fsI5GHcSce9hGQIaGQUhGQ9KdeS8dt8-GtUhiecjUr9hGrIjdtxTT09442J72pl-DhF-nsdKGYa7GsdoisXTnsFTDYa-iz0RDQ8giQFKkjx8nt2Yg0G492nIS0e6S70hiCUadeTKUYaTde2antIafeURGr9jUY1YdQ91Gh8TdhiTGs95Ut21"],
    "dp_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "dp_clk": ["https://million-api.aiclk.com/external/common/trace?t=dplink_click\u0026iclicashsid=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026opt_ideaid=0"],
    "app_name": "",
    "app_package": "",
    "app_information": {},
    "app_logo": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "coin": 0,
    "idea_id": 522298437,
    "idea_id_str": "9ac1a10f0fb75fa60c76e159d99180eb",
    "title_sign": "1e3e4ec0b1fc1ceb1e536e4abc5093fc",
    "source_mark": "联盟•ia-adseye",
    "feature_id": "904827",
  }
  data.urlType = getFileType(data?.url);
  data.ad_Logo_url = Logo;

  // 使用 art-template 编译模板
  const templateRender = artTemplate.compile(interactionQm3Template);
  const html = templateRender(data);

  const child = document.createElement('div');
  child.innerHTML = html;
  document.body.appendChild(child);
  
  // 处理跳过按钮
  const skipButton = document.getElementById('interaction_skip_button');
  if(skipButton) {
    skipButton.addEventListener('click', function(){
      const splashEle = document.getElementById('interation_modal_wrapper');
      if(splashEle){
        splashEle.remove();
      }
    })
  }

  // 处理继续按钮
  const continueButton = document.getElementById('continue_button');
  if(continueButton) {
    continueButton.addEventListener('click', function(){
      if (data?.c_url) {
        window.open(data?.c_url, '_blank');
      }
    })
  }
}

const renderRewardedQm1 = ( ) => {
  const data = {
    "type": 2,
    "interaction_type": 1,
    "title": "burger-bar2",
    "desc": "Burger Bar is a fun simulation game where players create delicious burgers by selecting ingredients and serving customers quickly, with various levels and upgrades.",
    "url": "https://video-cdn.adseye.com/game/2048skill-edition-20241023.mov",
    "c_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "width": 720,
    "height": 1280,
    "imp": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_imp\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_show/cpm?CAAQYw.h4zuivjlP14DEMlNnjE6LVEiEbBvuMjHXbTiLMxCKPEap1HYPXCFd-dzHvX7D8qbJ47xs21qexINI4RIF14yp1XmHL4u4hRMFL4CFL4_pD4Gb404R40Go40i0xOIW4z0Idx4uqIGh4404Gx4i44m4s4GP6497PpC7LzynaGb7aO-nbz_pvp5HbXCHLjsFLsCF1Gj7b44Q4hI401o4PjREMdyODRqK5GqOWHaQvXfOMlqnh9qO5pf7_mf7bgrQbjJnZ9Twvj9EP9aOZ9aw_VqQP-Tn_Xqn_jbEhUZp1ICp17Cph86HPgspPljnaT67LgsFvdjnbX9HvpCpDsDHLdsHP0_pu9ywb344xh04x144x1I4x174x1R4x1m4xh44yh04yhZ4y1y4y1N4yh4G4hIG4h0G4h7G4hRG4hyG414G41IG417G41oG41yG41mG4h4G0hIG0huG0GuB4xhz4G04BR1ggHz7044444444447xIi4MI7h44u4hR4pxjUAMCUAMCUA1xmVyB44zR4xxz46xBr0TGjH_zDp_z5HasmHLz9n1Bau6G6nPpZ7DXyHLxCpDdjpvIDp10VHaz_H1l6F1x5pa4V75I0nLETpDHTHD79F1XCFP0C7mIGI1zD7_0-7_pD7_zyH1GjHLjT7LpDn1I5pbzD7b05HLlssxzhh4v64ugTODBTKPHy7Z-67PHtnP9sKPBsOZ-TnMxfO_jJn_Byw5ljKL4ZJx7hz4K0Gx1oG6xDnap-H1sypZ-sH14-KL0-F1pf7bz5pZVZH_zV7DjsHDns7PzCpL4V"],
    "clk": ["https://logrcv.adseyeservice.com/trace?search_id=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026ads_type=native\u0026trace_type=ia_dsp_click\u0026event_timestamp=__EVENT_TIMESTAMP__", "http://logrcv.adseyeservice.com/adx_click?CAAQWg.422p3J8xse2hmzxPi8m7t1m3mrFJpz8dqr-3tz05nsmCUedZsq5f_a_9dJqGhwurg2G0TveuW0cPc2Vcfe2KUeqHdt2p24Vzft25ft2QUh2Sr2I2V2IS62I3I0DcB29Ic_02pucS422I2S02322H2T2Ss72XGsU5Gt9KiCSrGCDair9QUJUjdrq5dt8TftT5feS8Gr22L24c2Ie62s8Vmz_KDhVunjSuDBdCLJqRDzxui4XuDjURGQHRGrlALr8giYX-kJ8XmsXCDYXCkQ1uLsa-iQquiQ8rm4MYUec5UeG5U4w7dslTUsx8iC-7GtlTfJ_8irqXdJU5UhThdt_TdsIQUpXKkrN2204I20e220ec20eG20eV20eH20422K4I2K4Y2KeK2KeP2K42S24cS24IS24GS24VS24KS2e2S2ecS2eGS2e6S2eKS2eHS242SI4cSI4pSISpF20492SI2FVelld9GI2222222222G0c32zcG422p24V2U08MOz5MOz5MOe0H1KF229V2009270FAI-S8dQ9hUQ9jdCTHdt9XieFCp7S7isUYGhqKdt05Uh_8UJchUeI1dC9Qdex7fe0jUC21GjcIitm-Uhd-dhGXfeq5fsI5GHcSce9hGQIaGQUhGQ9KdeS8dt8-GtUhiecjUr9hGrIjdtxTT09442J72pl-DhF-nsdKGYa7GsdoisXTnsFTDYa-iz0RDQ8giQFKkjx8nt2Yg0G492nIS0e6S70hiCUadeTKUYaTde2antIafeURGr9jUY1YdQ91Gh8TdhiTGs95Ut21"],
    "dp_url": "https://adseye1.minigame.vip/icon/game/hard-worker/play?from=box_list",
    "dp_clk": ["https://million-api.aiclk.com/external/common/trace?t=dplink_click\u0026iclicashsid=iIX03trzfWbOGJvaFHyMRhJLx1-gc03lYLNGTD4e\u0026opt_ideaid=0"],
    "app_name": "",
    "app_package": "",
    "app_information": {},
    "app_logo": "https://porsche-prod.oss-cn-beijing.aliyuncs.com/image/gift/20210610/b5ed1bef8ba5d8defe94c139354d5d61.png",
    "coin": 0,
    "idea_id": 522298437,
    "idea_id_str": "9ac1a10f0fb75fa60c76e159d99180eb",
    "title_sign": "1e3e4ec0b1fc1ceb1e536e4abc5093fc",
    "source_mark": "联盟•ia-adseye",
    "feature_id": "904827",
  }
  data.urlType = getFileType(data?.url);
  data.ad_Logo_url = Logo;
  data.volume_url = Volume;
  data.redo_url = Redo;

  let _duration = Number(data.duration || 15);
  let interval = null;

  // 使用 art-template 编译模板
  const templateRender = artTemplate.compile(rewardedQm1Template);
  const html = templateRender(data);

  const child = document.createElement('div');
  child.innerHTML = html;
  document.body.appendChild(child);

  const handleCountDown = () => {
    if(_duration > 0){
      const duration_text = document.getElementById('duration_text');
      const rewarded_tip = document.getElementById('rewarded_tip');
      interval = setInterval(() => {
        if(_duration > 0) {
          _duration -= 1;
          duration_text.innerHTML = ' ' + _duration;
        } else{
          rewarded_tip.innerHTML = 'Reward granted';
          const rewarded_icon = document.getElementById('rewarded_icon');
          rewarded_icon.src = "https://image-cdn.adseye.com/tma/incite_video_coin_light.png";
          clearInterval(interval);
        }
      }, 1000);
    }
  }

  const closeVideoButton = document.getElementById('close_video_button');
  if(closeVideoButton) {
    handleCountDown();
   
    closeVideoButton.addEventListener('click', function(){
      const qm_rewarded_wrapper = document.getElementById('qm_rewarded_wrapper');
      if(qm_rewarded_wrapper && _duration === 0){
        qm_rewarded_wrapper.remove();
      } else {
        clearInterval(interval);
        const rewarded_modal_wrapper = document.getElementById('rewarded_modal_wrapper');
        rewarded_modal_wrapper.style.display = 'flex';

        const videoRef = document.getElementById('videoRef');
        videoRef.pause();
      }
    })
  }

  const volume_button = document.getElementById('volume_button');
  if (volume_button) {
    volume_button.addEventListener('click', function(){
      const videoRef = document.getElementById('videoRef');
      if (videoRef.muted){
        videoRef.muted = false;
        volume_button.src= Volume;
      } else {
        videoRef.muted = true;
        volume_button.src= Mute;
      }
    });
  }

  const modal_exit_button = document.getElementById('modal_exit_button');
  if (modal_exit_button) {
    modal_exit_button.addEventListener('click', function(){
      const qm_rewarded_wrapper = document.getElementById('qm_rewarded_wrapper');
      qm_rewarded_wrapper.remove();
    });
  }

  const modal_continue_button = document.getElementById('modal_continue_button');
  if (modal_continue_button) {
    modal_continue_button.addEventListener('click', function(){
      handleCountDown();

      const rewarded_modal_wrapper = document.getElementById('rewarded_modal_wrapper');
      const videoRef = document.getElementById('videoRef');
      const qm_rewarded_wrapper_desc_wrapper = document.getElementById('qm_rewarded_wrapper_desc_wrapper');
      const continue_button = document.getElementById('continue_button');
      const qm_rewarded_wrapper_desc_wrapper_2 = document.getElementById('qm_rewarded_wrapper_desc_wrapper_2');
  
      rewarded_modal_wrapper.style.display = 'none';
      videoRef.style.display = 'block';
      videoRef.play();
      qm_rewarded_wrapper_desc_wrapper.style.display = 'block';
      continue_button.style.display = 'block';
      qm_rewarded_wrapper_desc_wrapper_2.style.display = 'none';
    });
  }

  // 处理继续按钮
  const continue_button = document.getElementById('continue_button');
  if(continue_button) {
    continue_button.addEventListener('click', function(){
      if (data?.c_url) {
        window.open(data?.c_url, '_blank');
      }
    })
  }

    // 处理继续按钮
    const continue_button2 = document.getElementById('continue_button2');
    if(continue_button2) {
      continue_button2.addEventListener('click', function(){
        if (data?.c_url) {
          window.open(data?.c_url, '_blank');
        }
      })
    }

  // 视频播放结束回调
  const handleEnded = () => {
    const videoRef = document.getElementById('videoRef');
    const qm_rewarded_wrapper_desc_wrapper = document.getElementById('qm_rewarded_wrapper_desc_wrapper');
    const continue_button = document.getElementById('continue_button');
    const qm_rewarded_wrapper_desc_wrapper_2 = document.getElementById('qm_rewarded_wrapper_desc_wrapper_2');

    videoRef.style.display = 'none';
    qm_rewarded_wrapper_desc_wrapper.style.display = 'none';
    continue_button.style.display = 'none';
    qm_rewarded_wrapper_desc_wrapper_2.style.display = 'flex';
  };

  // 视频能播放事件
  const handleCanPlay = () => {
    const videoRef = document.getElementById('videoRef');
    videoRef.play();
  };

  const handlePlay = () => {
    const videoRef = document.getElementById('videoRef');
    const qm_rewarded_wrapper_desc_wrapper = document.getElementById('qm_rewarded_wrapper_desc_wrapper');
    const continue_button = document.getElementById('continue_button');
    const qm_rewarded_wrapper_desc_wrapper_2 = document.getElementById('qm_rewarded_wrapper_desc_wrapper_2');

    videoRef.style.display = 'block';
    videoRef.play();
    qm_rewarded_wrapper_desc_wrapper.style.display = 'block';
    continue_button.style.display = 'block';
    qm_rewarded_wrapper_desc_wrapper_2.style.display = 'none';
  }

  // 处理继续按钮
  const videoRef = document.getElementById('videoRef');
  if(videoRef) {
    videoRef.addEventListener('ended', handleEnded);
    videoRef.addEventListener('canplay', handleCanPlay);
  }

  // 处理继续按钮
  const redo_button = document.getElementById('redo_button');
  if(redo_button) {
    redo_button.addEventListener('click', handlePlay);
  }
}


export {
  renderSplashQm, renderSplashTMA1, renderSplashTMA2,
  renderInteractionTMA1, renderInteractionQm1, renderInteractionQm2, renderInteractionQm3,
  renderRewardedQm1
}