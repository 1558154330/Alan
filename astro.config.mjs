import { defineConfig } from 'astro/config';

// 双平台部署适配：
// - Cloudflare Pages 构建时自动注入 CF_PAGES=1，部署在域名根路径 → base 为 '/'
// - GitHub Pages（仓库名 Alan）访问地址 https://1558154330.github.io/Alan/ → base 为 '/Alan'
const isCloudflare = process.env.CF_PAGES === '1';

export default defineConfig({
  site: isCloudflare ? 'https://www.zybcl.com' : 'https://1558154330.github.io',
  base: isCloudflare ? undefined : '/Alan',
  output: 'static',
});
