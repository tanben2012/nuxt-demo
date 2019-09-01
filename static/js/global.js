//=>根据当前设备的宽度,动态计算出REM的换算比例,实现页面中元素的等比缩放
~function anonymous(window) {
  const computedREM = function computedREM() {
    const winW = document.documentElement.clientWidth,
      desW = 750
    if (winW >= 750) {
      document.documentElement.style.fontSize = '100px'
      return
    }
    document.documentElement.style.fontSize = winW / desW * 100 + 'px'
  }
  computedREM()
  window.addEventListener('resize', computedREM)
}(window)
