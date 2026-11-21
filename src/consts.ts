/** 全站可调的基础信息，改这里即可替换公司名称与简介 */
export const SITE = {
  name: '永昌硅胶',
  englishName: 'Yongchang Silicone',
  tagline: '专注硅胶制品研发与制造，把柔软的材料做进生活的每个角落。',
  role: '硅胶制品研发 · 生产 · 定制',
  location: '中国 · 深圳',
  email: 'hello@yongchang.cn',
  description:
    '永昌硅胶官网：母婴硅胶用品、厨房烘焙器具、工业密封件与硅胶制品定制开发，从打样到量产一站式交付。',
} as const;

export const NAV = [
  { label: '首页', href: '/' },
  { label: '产品中心', href: '/products' },
  { label: '资讯', href: '/blog' },
  { label: '关于我们', href: '/about' },
] as const;
