
/**
 * 解析 URL 参数的方法
 * @param {string} search
 * @param {string} key
 */
export function getParams(search, key) {
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

export const checkIPv4 = (IP) => {
  if (!IP) return false;
  let arr = IP.split('.');
  if (arr.length !== 4) return false;
  for (let i of arr) {
    if (
      Object.is(Number(i), NaN) ||
      Number(i) > 255 ||
      Number(i) < 0 ||
      (i[0] === '0' && i.length !== 1)
    ) {
      return false;
    }
  }
  return true;
};

/**
 * 判断url是视频还是图片
 * @param {string} search
 * @param {string} key
 */
export function getFileType(url) {
  
  let videoFlag = ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv'].some( (item) => url.includes(item));
  if(videoFlag) return 'video'

   let imageFlag = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].some( (item) => url.includes(item));
  if(imageFlag) return 'image';
  return 'unknown';
}

export function findScriptByMeta(metaKey, metaValue) {
  let flag = false;
  // 获取所有 <script> 元素
  var scripts = document.querySelectorAll('script');

  // 遍历所有 <script> 元素
  scripts.forEach(function(script) {
    // 检查是否有指定的 meta 属性并且值匹配
    if (script.hasAttribute(metaKey) && script.getAttribute(metaKey) === metaValue) {
      // 移除匹配的 <script> 元素
      flag = true;
    }
  });
  return flag
}

// 处理跳过按钮
export function removeScriptByMeta(metaKey, metaValue) {
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