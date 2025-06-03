// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 各チャプター共通のスキーマ（フロントマターの型定義）
const chapterSchema = z.object({
  title: z.string(),
  date: z.date(),
  images: z.array(z.string()),
  chapter: z.number(),
  // 必要に応じて、あらすじ、タグなどの共通フィールドを追加
});

// 「Peach Float」シリーズ用のコレクション
const peachfCollection = defineCollection({
  type: 'content', // Markdownファイルなので 'content'
  schema: chapterSchema, // 上で定義した共通スキーマを利用
});

// 「Blue Moon Madness」シリーズ用のコレクション
const bluemmCollection = defineCollection({
  type: 'content',
  schema: chapterSchema, // こちらも共通スキーマを利用
});

export const collections = {
  'peachf': peachfCollection,
  'bluemm': bluemmCollection,
  // 今後新しいシリーズが増えたら、ここに追加していきます
};