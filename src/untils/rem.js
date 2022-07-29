/*
* @Author: xizixin
* @Describe: Adaptation transformation
* @Date: 2018-06-22
*/
// rem等比适配配置文件
// 基准大小
const baseSize = 100
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 1366宽的缩放比例，可根据自己需要修改
  const scale = document.documentElement.clientWidth / 1920
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}

// (function () {
//   function setRootFontSize() {
//       let rem, rootWidth;
//       let rootHtml = document.documentElement;
//       //限制展现页面的最小宽度
//       rootWidth = rootHtml.clientWidth < 1366 ? 1366 : rootHtml.clientWidth;
//       // 19.2 = 设计图尺寸宽 / 100（ 设计图的rem = 100 ）
//       rem = rootWidth / 19.2;
//       // 动态写入样式
//       rootHtml.style.fontSize = `${rem}px`;
//   }
//   setRootFontSize();
//   window.addEventListener("resize", setRootFontSize, false);
// })();