/** 把日期格式化为「2024年3月18日」 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** 粗略估算阅读时长（分钟）：中文 400 字/分钟，英文 200 词/分钟 */
export function readingTime(body = ''): number {
  const han = (body.match(/[\u4e00-\u9fa5]/g) ?? []).length;
  const words = body
    .replace(/[\u4e00-\u9fa5]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(han / 400 + words / 200));
}
