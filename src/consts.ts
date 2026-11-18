/** 全站可调的基础信息，改这里即可替换姓名与简介 */
export const SITE = {
  name: '梁永昌',
  englishName: 'Liang Yongchang',
  tagline: '我是一名产品经理，在硅胶行业摸爬滚打十几年。',
  role: '产品经理 · 硅胶制品行业',
  location: '中国 · 深圳',
  email: 'hello@example.com',
  description:
    '梁永昌的个人主页。记录十几年硅胶行业里的产品思考、用户洞察与量产经验。',
} as const;

export const NAV = [
  { label: '首页', href: '/' },
  { label: '关于', href: '/about' },
  { label: '文章', href: '/blog' },
] as const;
