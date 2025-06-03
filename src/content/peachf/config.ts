// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 各チャプター共通のスキーマ（フロントマターの型定義）
const chapterSchema = z.object({
  title: z.string(),                     // チャプタータイトル
  date: z.date(),                        // 公開日
  chapter: z.number(),                   // 話数（数値）
  images: z.array(z.string()),           // ページ画像の配列（相対パス）

  // 必要に応じて以下を追加できます
  // description: z.string().optional(),   // あらすじ
  // tags: z.array(z.string()).optional(), // タグ一覧
});

// 「Peach Float」シリーズ用のコレクション
const peachfCollection = defineCollection({
  type: 'content',
  schema: chapterSchema,
});

// 「Blue Moon Madness」シリーズ用のコレクション
const bluemmCollection = defineCollection({
  type: 'content',
  schema: chapterSchema,
});

// 他シリーズを追加する場合はここに追記
export const collections = {
  peachf: peachfCollection,
  bluemm: bluemmCollection,
};
