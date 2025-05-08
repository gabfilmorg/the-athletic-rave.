export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-16 bg-black" id="event">
      <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-extrabold font-sans uppercase tracking-tight text-white text-center md:text-left leading-tight">
          THE APEX OF ENDURANCE.<br />THE HEART OF THE RAVE.
        </h2>
        <div className="w-16 h-1 bg-white my-6 rounded-full" />
        <p className="text-white/80 text-base md:text-lg font-sans max-w-xl text-center md:text-left">
          The Athletic Rave is not just a race; it's an experience. Converging in the breathtaking landscape of Foz do Iguaçu this October, we fuse elite running and cycling with the raw, pulsating energy of a rave. Push your boundaries. Feel the rhythm. Conquer the course. This is where your peak performance meets an unforgettable vibe.
        </p>
        <div className="mt-8 bg-black border border-white px-6 py-3 text-white font-bold text-lg uppercase tracking-widest shadow-md">
          FOZ DO IGUAÇU OCTOBER 2024 &bull; RUN. CYCLE. RAVE.
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        {/* Placeholder para imagem de alto contraste */}
        <div className="w-72 h-72 md:w-96 md:h-96 bg-white/10 border-2 border-white flex items-center justify-center">
          <span className="text-white/30 text-7xl font-extrabold select-none">●</span>
        </div>
      </div>
    </section>
  );
} 