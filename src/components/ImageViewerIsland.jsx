// src/components/ImageViewerIsland.jsx
import { useState, useEffect } from 'react'; // useEffect を追加

export default function ImageViewerIsland({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 画像がない場合は何も表示しない、またはメッセージを表示
  if (!images || images.length === 0) {
    return <p className="text-center text-gray-500">表示する画像がありません。</p>;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // キーボード操作（左右矢印キー）でページめくり
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images]); // images配列が変更された場合にも再設定するように

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none" role="region" aria-label="マンガビューア"> {/* max-w-2xl は表示幅の例 */}
      {/* 現在の画像 */}
      <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden rounded shadow">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={currentIndex} // キーを変更することでアニメーションのきっかけにもできる
          src={images[currentIndex]}
          alt={`ページ <span class="math-inline">\{currentIndex \+ 1\}/</span>{images.length}`}
          className="object-contain h-full w-full"
        />
      </div>

      {/* ナビゲーションボタン (オーバーレイ) */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-r-md focus:outline-none focus:ring-2 focus:ring-white transition-colors z-10"
            aria-label="前のページへ"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white transition-colors z-10"
            aria-label="次のページへ"
          >
            &gt;
          </button>
        </>
      )}

      {/* ページ番号表示 (オーバーレイ) */}
      {images.length > 0 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}