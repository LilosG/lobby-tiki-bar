import { getCollection } from 'astro:content';

export async function getSingleton(name: string) {
  const [entry] = await getCollection(name as any) as any[];
  if (!entry) throw new Error(`Missing singleton content: ${name}`);
  return entry.data as any;
}

export async function getOrderedCollection(name: string) {
  const entries = await getCollection(name as any) as any[];
  return entries
    .sort((a: any, b: any) => a.data.order - b.data.order)
    .map((entry: any) => entry.data);
}

export const rawBlock = (value: string) => `\n${value}\n`;
