// 处理跳过按钮
function removeScriptByMeta(metaKey, metaValue) {
  // 获取所有 <script> 元素
  var scripts = document.querySelectorAll('script');

  // 遍历所有 <script> 元素
  scripts.forEach(function(script) {
    // 检查是否有指定的 meta 属性并且值匹配
    if (script.hasAttribute(metaKey) && script.getAttribute(metaKey) === metaValue) {
      // 移除匹配的 <script> 元素
      script.remove();
    }
  });
};

const skipButton = document.getElementById('skip_button');
if(skipButton) {
  skipButton.addEventListener('click', function(){
    const splashEle = document.getElementById('TEMPLATE_CONTAINER');
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