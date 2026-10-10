// src/analytics.js — 可选的 Cloudflare Web Analytics
// Google Analytics 4 在 index.html 中初始化，并随预渲染覆盖所有语言页面。
//
// 怎么启用：在 Cloudflare 控制台 → Web Analytics 添加站点，拿到 token 后填到下面的
// CF_BEACON_TOKEN。留空时本模块不做任何事（不会请求任何第三方域名），
// 未配置 token 只表示不启用 Cloudflare 统计，不影响 Google Analytics 4。
//
// 为什么必须补埋点：出海是「关键词 → 落地页 → 留存」的循环，没有数据就没法判断
// 哪个语言的页面有效、哪条长尾词带来了转化。

/** Cloudflare Web Analytics 的 beacon token（形如 1a2b3c...，不是 account id） */
export const CF_BEACON_TOKEN = '';

/** 注入埋点脚本。重复调用是安全的（同一个 token 只会注入一次）。 */
export function initAnalytics() {
  if (!CF_BEACON_TOKEN) return;
  if (typeof document === 'undefined') return;
  if (document.querySelector('script[data-cf-beacon]')) return;

  const el = document.createElement('script');
  el.defer = true;
  el.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  el.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
  document.head.appendChild(el);
}
