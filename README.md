# 永昌硅胶官网

硅胶制品公司官网，基于 Astro v5 的静态站点，参考「零代码搭个人主页」教程架构搭建。

- 线上地址（Cloudflare Pages）：https://www.zybcl.com
- 线上地址（GitHub Pages 备用）：https://1558154330.github.io/Alan/
- 推送到 `main` 分支后：Cloudflare Pages 与 GitHub Actions 均自动构建部署

## 双平台部署说明

`astro.config.mjs` 通过环境变量自动适配：
- Cloudflare Pages 构建时自带 `CF_PAGES=1` → base 为 `/`（根路径）
- GitHub Actions 构建 → base 为 `/Alan`

## 页面结构

| 路径 | 内容 |
| --- | --- |
| `/` | 首页：品牌介绍、数据条、四大产品线、最新资讯 |
| `/products` | 产品中心：母婴 / 厨房 / 工业 / 定制开发 + 定制流程 |
| `/blog` | 资讯列表（`src/content/blog/` 下的 Markdown 文章） |
| `/about` | 关于我们 |

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 构建到 dist/
```

## 更新内容

新增资讯：在 `src/content/blog/` 新建 `.md` 文件（含 title/description/pubDate/category/tags frontmatter），推送后自动部署。
