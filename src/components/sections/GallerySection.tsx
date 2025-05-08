export default function GallerySection() {
  return (
    <section className="w-full bg-black py-20 flex flex-col items-center" id="gallery">
      <h2 className="text-3xl md:text-5xl font-extrabold font-sans uppercase tracking-tight text-white text-center mb-12">
        FEEL THE RUSH.
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Placeholders para imagens/vídeos */}
        <div className="aspect-[4/3] bg-white/10 border-2 border-white flex items-center justify-center">
          <span className="text-white/30 text-5xl font-extrabold select-none">IMG 1</span>
        </div>
        <div className="aspect-[4/3] bg-white/10 border-2 border-white flex items-center justify-center">
          <span className="text-white/30 text-5xl font-extrabold select-none">IMG 2</span>
        </div>
        <div className="aspect-[4/3] bg-white/10 border-2 border-white flex items-center justify-center">
          <span className="text-white/30 text-5xl font-extrabold select-none">IMG 3</span>
        </div>
      </div>
    </section>
  );
} 