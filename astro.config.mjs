// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // ← 追加：React統合のため

export default defineConfig({
  integrations: [
    react(), // ← 追加：ReactをAstroに統合
    tailwind(), // ← 既存のTailwind統合
  ],
  // その他の設定をここに追加できます（必要に応じて）
});
