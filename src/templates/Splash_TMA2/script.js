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

function getParams(search, key) {
  if (!search) return {};
  const str = search.indexOf('?') !== -1 ? search.split('?')[1] : search;
  const params = str.split('&').reduce((args, arg) => {
    const [argKey, ...value] = arg.split('=');
    //@ts-ignore
    args[decodeURIComponent(argKey)] = decodeURIComponent(value.join('='));
    return args;
  }, {});
  //@ts-ignore
  if (key) return params[key] || '';
  return params;
}

const skipButton = document.getElementById('skip_button');
if(skipButton) {
  let _duration = Number(data?.duration || 10);
  const skipText = document.getElementById('splash_skip_text');
  const interval = setInterval(() => {
    if(_duration > 0) {
      _duration -= 1;
      skipText.innerHTML = ' ' + _duration;
    } else{
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

    const ads_type = getParams(data?.c_url)?.ads_type;
    if(ads_type == 'tme'){
      return false;
    }

    if (data?.c_url) {
      window.open(data?.c_url, '_blank');
    }
  })
}