<template>
  <div class="page_container" style="margin-top: 12px;">
    Banner Ads Display
    <div style="width: 320px; height: 250px;" id="banner1">
    
    </div>
  </div>
</template>
<script setup>
//@ts-ignore
import { fetchAds } from '@qtt/adseye-vue3';
import { BANNER_REQUEST } from '@/mock/banner.js'

const handleClick = async (styleType = 'tma') => {
  // alert(1)
  await fetchAds({
    type: 'banner', 
    styleType,
    params: BANNER_REQUEST, 
    render:true, 
    container: '#banner1',
  });
}

handleClick();

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
