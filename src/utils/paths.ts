/**
 * 生成带 GitHub Pages base 前缀的站内路径。
 * 本地开发 BASE_URL = '/'，生成 '/about'；
 * 部署后 BASE_URL = '/Alan'，生成 '/Alan/about'。
 * 传入的路径必须以 '/' 开头。
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : `/${path}`);
}
