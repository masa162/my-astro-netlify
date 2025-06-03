// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 各チャプター共通のスキーマ（フロントマターの型定義）
const chapterSchema = z.object({
  title: z.string(),
  date: z.date(),
  images: z.array(z.string()),
  chapter: z.number(),
  layout: z.string(), // ← 追加: 各チャプターページが使用するレイアウトファイルへのパス
  // 必要に応じて、あらすじ(description)、タグ(tags)などの共通フィールドを追加
  // description: z.string().optional(),
  // tags: z.array(z.string()).optional(),
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