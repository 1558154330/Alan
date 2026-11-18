import { defineConfig } from 'astro/config';

// GitHub Pages 项目站点：仓库名为 Alan，访问地址 https://1558154330.github.io/Alan/
// site 用于 canonical 链接，base 让所有资源带上 /Alan 前缀
export default defineConfig({
  site: 'https://1558154330.github.io',
  base: '/Alan',
  output: 'static',
});
