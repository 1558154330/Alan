import { defineConfig } from 'astro/config';

// 部署到自己的域名时，把 site 改成真实地址（用于 canonical / RSS 等）
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
});
