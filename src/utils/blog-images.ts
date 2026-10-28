import type { ImageMetadata } from 'astro';
const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}', { eager: true });
export function resolveBlogImage(path: string): ImageMetadata | undefined {
  if (path.startsWith('/images/') || path.startsWith('https://')) return undefined;
  const key = path.replace(/^\.\.\/\.\.\/assets\//, '/src/assets/');
  const image = images[key]?.default;
  if (!image) throw new Error(`Blog image not found: ${path}`);
  return image;
}
