// components/ImageViewerIsland.jsx
import { useState } from 'react';

export default function ImageViewer({ images= [] }) { // [cite: 5]
  const [idx, setIdx] = useState(0); // [cite: 5]
  return ( // [cite: 6]
    <div className="relative"> {/* [cite: 6] */}
      <img src={images[idx]} className="mx-auto" /> {/* [cite: 6] */}
      <button onClick={() => setIdx((idx - 1 + images.length) % images.length)} className="abs left-2 top-1/2">&lt;</button> {/* [cite: 6] */}
      <button onClick={() => setIdx((idx + 1) % images.length)} className="abs right-2 top-1/2">&gt;</button> {/* [cite: 6] */}
    </div> // [cite: 6]
  ); // [cite: 7]
} // [cite: 7]