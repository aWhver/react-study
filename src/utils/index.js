/**
 * Created by zhaojuntong on 2018/1/26.
 */
export function getStyle (dom, prop) {
  let style
  style = dom.currentStyle && dom.currentStyle[dom] || getComputedStyle(dom, false)[prop]
  if (prop === 'transform') {
    style = parseFloat(style.substring(7).split(',')[4])
  }
  return style
}