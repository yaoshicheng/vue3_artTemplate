let _duration = Number(data.duration || 15);
let interval = null;

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
      volume_button.src= data?.volume_url;
    } else {
      videoRef.muted = true;
      volume_button.src= data?.mute_url;
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