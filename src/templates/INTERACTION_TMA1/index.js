import artTemplate from 'art-template'; 
import { getFileType, getParams, removeScriptByMeta, findScriptByMeta } from '@/utils/common';
import Template from './template.art?raw'; 
import styles from './index.css?raw'
import scriptText from './script.js?raw'


import Shake from '@/templates/assets/shake.png';
import Slide from '@/templates/assets/slide.png';
import Fingerprint from '@/templates/assets/fingerprint.png';
import Logo from '@/templates/assets/logo.png';
import Download from '@/templates/assets/download.png';
import GooglePlay from '@/templates/assets/google-play.png';
import AppStore from '@/templates/assets/app-store.png';
import Telegram from '@/templates/assets/telegram.png';
import ArrowRight from '@/templates/assets/arrow-right.png';
import Play from '@/templates/assets/pause.png';
import Volume from '@/templates/assets/volume.png';
import Mute from '@/templates/assets/mute.png';
import Redo from '@/templates/assets/redo.png';

const MOCK_DATA = {
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

const handleScript = (_data) => {
  removeScriptByMeta('data-meta-key', 'splash_qm');
  if(!findScriptByMeta('data-meta-key', 'splash_qm')){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = `
      (function() {
        const data = ${JSON.stringify(_data)};
        ${scriptText}
      })();
    `;
    script.setAttribute('data-meta-key', 'splash_qm');
    script.async = true;
    document.body.appendChild(script);
  }
}

const handleScript2 = (_data) => {
  return `<script type="text/javascript" data-meta-key="splash_qm" >
    (function() {
      const data = ${JSON.stringify(_data)};
      ${scriptText}
    })();
  </script>`
}

const handleCss = () => {
 return `<style>${styles}</style>`
}
  
const renderTemplate = ( _data = MOCK_DATA) => {
  const data = _data || MOCK_DATA;

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

  const templateRender = artTemplate.compile(Template);
  let html = templateRender(data);
  html = html + handleCss();

  const child = document.createElement('div');
  child.id = "TEMPLATE_CONTAINER"
  child.innerHTML = html;
  document.body.appendChild(child);

  handleScript(data);
}

export {
  renderTemplate
}