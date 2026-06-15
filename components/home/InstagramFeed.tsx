import React from "react";


const POSTS = [
  { emoji: "🥜", caption: "Fresh batch of premium almonds just arrived!", likes: 284, id: 1 },
  { emoji: "🏔️", caption: "Straight from the mountains of Chitral", likes: 512, id: 2 },
  { emoji: "🍯", caption: "Pure mountain honey — limited stock!", likes: 391, id: 3 },
  { emoji: "🌰", caption: "Walnut season is here! 🌰", likes: 229, id: 4 },
  { emoji: "🌲", caption: "Chilgoza pine nuts — nature's luxury", likes: 674, id: 5 },
  { emoji: "🎁", caption: "Perfect gift box for Eid & weddings", likes: 448, id: 6 },
];

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-3">Follow Our Journey</p>
          <h2 className="font-display text-4xl font-bold text-[#1B4332] mb-2">
            @chitralnuts on Instagram
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-500 text-sm">Follow us for daily nut inspiration, health tips, and behind-the-scenes from Chitral</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 mb-8">
          {POSTS.map((post) => (
            <a key={post.id} href="https://instagram.com/chitralnuts" target="_blank" rel="noopener noreferrer"
              className="group relative aspect-square bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE6] rounded-sm overflow-hidden cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                {post.emoji}
              </div>
              <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/70 transition-all duration-300 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-white text-xs font-bold">❤️ {post.likes}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="https://instagram.com/chitralnuts" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white px-7 py-3 rounded-sm font-semibold text-sm transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
            Follow @chitralnuts
          </a>
        </div>
      </div>
    </section>
  );
}
