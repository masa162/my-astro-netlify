// astro.config.mjs
import { defineConfig } from 'astro/config';
// ① Tailwind Integration をインポート
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ② integrations 配列に tailwind() を追加
  integrations: [
    tailwind({
      /* もし特別なオプションを渡したいならここに書きますが、
         すでに tailwind.config.js を用意していれば
         このまま空のオブジェクトで問題ありません */
      // config: { /* tailwind.config.js の上書き用設定 */ }
    }),
  ],
  // ここにその他の Astro 設定（もしあれば）を残します
});
