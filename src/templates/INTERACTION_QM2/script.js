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
    const TEMPLATE_CONTAINER = document.getElementById('TEMPLATE_CONTAINER');
    if(TEMPLATE_CONTAINER){
      TEMPLATE_CONTAINER.remove();
      removeScriptByMeta('data-meta-key', 'splash_qm')
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