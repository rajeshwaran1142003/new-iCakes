import React from 'react';
import { assetPath } from '../utils/assetPath';

const images = [
  assetPath('/product/img1.jpg'),
  assetPath('/product/img2.jpg'),
  assetPath('/product/img3.jpg'),
  assetPath('/product/img4.jpg'),
  assetPath('/product/img5.jpg'),
  assetPath('/product/img6.jpg'),
  assetPath('/product/img7.jpg'),
  assetPath('/product/img8.jpg'),
  assetPath('/product/img9.jpg'),
  assetPath('/product/img10.jpg'),
  assetPath('/product/img11.jpg'),
  assetPath('/product/img12.jpg'),
];

const Gallery: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10 md:mb-12 text-center">
        <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-3">Our Work</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Gallery</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">A glimpse of our baking classes and student creations.</p>
      </header>

      {/* Masonry-like layout using CSS columns */}
      <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative mb-6 break-inside-avoid rounded-2xl overflow-hidden shadow-md group bg-gray-100"
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Gallery;


