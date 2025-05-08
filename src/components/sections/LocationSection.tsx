export default function LocationSection() {
  return (
    <section className="w-full bg-black py-20 flex flex-col items-center" id="location">
      <h2 className="text-3xl md:text-5xl font-extrabold font-sans uppercase tracking-tight text-white text-center mb-10">
        THE STAGE: FOZ DO IGUAÇU
      </h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center justify-center mb-8 px-4">
        {/* Mapa dark placeholder */}
        <div className="flex-1 min-w-[300px] h-64 bg-white/10 border-2 border-white flex items-center justify-center">
          <span className="text-white/30 text-3xl font-extrabold select-none">MAPA</span>
        </div>
        {/* Grid de imagens */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="aspect-[4/3] bg-white/10 border-2 border-white flex items-center justify-center">
            <span className="text-white/30 text-xl font-extrabold select-none">FOZ 1</span>
          </div>
          <div className="aspect-[4/3] bg-white/10 border-2 border-white flex items-center justify-center">
            <span className="text-white/30 text-xl font-extrabold select-none">FOZ 2</span>
          </div>
        </div>
      </div>
      <p className="text-white/80 text-base md:text-lg font-sans text-center max-w-2xl">
        Experience the raw power of nature as your backdrop.
      </p>
    </section>
  );
} 