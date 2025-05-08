export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-black">
        {/* Video/Image Placeholder */}
        <div className="absolute inset-0 w-full h-full object-cover z-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-b from-black/80 to-black/60 flex items-center justify-center">
            <span className="text-white/20 text-7xl md:text-9xl font-extrabold select-none">[VIDEO]</span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="absolute top-6 left-0 w-full flex items-center justify-between px-8 z-10">
          <span className="font-bold text-lg tracking-widest uppercase">the athletic <span className="text-2xl align-middle">••</span> rave</span>
          <ul className="flex gap-8 text-xs md:text-sm font-semibold uppercase tracking-widest">
            <li><a href="#packages">Packages</a></li>
            <li><a href="#event">The Event</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </nav>
        {/* Headline & CTA */}
        <div className="relative z-10 flex flex-col items-center mt-24 md:mt-40">
          <h1 className="text-white font-extrabold text-4xl md:text-7xl uppercase tracking-tight text-center leading-none drop-shadow-xl">
            RUN BEYOND<br />LIMITS.<br />
            <span className="block mt-2">RIDE INTO<br />THE FUTURE.</span>
          </h1>
          <button className="mt-10 px-10 py-4 text-lg md:text-xl font-bold uppercase bg-black text-white border-2 border-white transition-transform hover:scale-105 hover:shadow-lg hover:text-white hover:bg-white/10">
            CHOOSE YOUR PACKAGE
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-16 bg-black" id="event">
        <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white text-center md:text-left leading-tight">
            THE APEX OF ENDURANCE.<br />THE HEART OF THE RAVE.
          </h2>
          <div className="w-16 h-1 bg-white my-6 rounded-full" />
          <p className="text-white/80 text-base md:text-lg max-w-xl text-center md:text-left">
            The Athletic Rave is not just a race; it's an experience. Converging in the breathtaking landscape of Foz do Iguaçu this October, we fuse elite running and cycling with the raw, pulsating energy of a rave. Push your boundaries. Feel the rhythm. Conquer the course. This is where your peak performance meets an unforgettable vibe.
          </p>
          <div className="mt-8 bg-black border border-white px-6 py-3 text-white font-bold text-lg uppercase tracking-widest shadow-md">
            FOZ DO IGUAÇU OCTOBER 2024 &bull; RUN. CYCLE. RAVE.
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-white/10 border-2 border-white flex items-center justify-center">
            <span className="text-white/30 text-7xl font-extrabold select-none">●</span>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="w-full py-24 bg-black flex flex-col items-center" id="packages">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white text-center mb-12">
          CHOOSE YOUR CHALLENGE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {["STARTER", "PRO", "ULTRA"].map((name, i) => (
            <div key={name} className="flex flex-col items-center bg-black border-white border-2 transition-transform hover:-translate-y-2 hover:shadow-2xl group">
              <div className="mt-8 mb-2 text-white text-2xl font-bold uppercase tracking-widest">{name}</div>
              <div className="mb-4 text-white/40 text-2xl">{"•".repeat(i+1)}</div>
              <ul className="mb-6 text-white/90 text-sm space-y-2">
                <li>• Feature 1</li>
                <li>• Feature 2</li>
                <li>• Feature 3</li>
                <li>• Feature 4</li>
              </ul>
              <div className="text-2xl font-bold text-white mb-6">R$ XXX</div>
              <button className="mb-8 w-full max-w-[200px] px-6 py-2 font-semibold uppercase rounded-none border-2 border-white bg-white text-black transition-all group-hover:bg-black group-hover:text-white group-hover:border-white">
                SIGN UP
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="w-full bg-black py-20 flex flex-col items-center" id="gallery">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white text-center mb-12">
          FEEL THE RUSH.
        </h2>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[1,2,3].map(i => (
            <div key={i} className="aspect-[4/3] bg-white/10 border-2 border-white flex items-center justify-center">
              <span className="text-white/30 text-5xl font-extrabold select-none">IMG {i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="w-full bg-black py-20 flex flex-col items-center" id="location">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white text-center mb-10">
          THE STAGE: FOZ DO IGUAÇU
        </h2>
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center justify-center mb-8 px-4">
          <div className="flex-1 min-w-[300px] h-64 bg-white/10 border-2 border-white flex items-center justify-center">
            <span className="text-white/30 text-3xl font-extrabold select-none">MAPA</span>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[1,2].map(i => (
              <div key={i} className="aspect-[4/3] bg-white/10 border-2 border-white flex items-center justify-center">
                <span className="text-white/30 text-xl font-extrabold select-none">FOZ {i}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white/80 text-base md:text-lg text-center max-w-2xl">
          Experience the raw power of nature as your backdrop.
        </p>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="w-full bg-black py-20 flex flex-col items-center" id="register">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white text-center mb-6">
          SPOTS ARE LIMITED.
        </h2>
        <p className="text-white/80 text-lg md:text-2xl text-center mb-10">
          THE ATHLETIC RAVE AWAITS. ARE YOU READY?
        </p>
        <button className="px-12 py-5 text-2xl font-bold uppercase bg-black text-white border-2 border-white transition-transform hover:scale-110 hover:shadow-2xl">
          REGISTER YOUR RAVE
        </button>
      </section>

      {/* FOOTER */}
      <footer className="w-full flex flex-col items-center justify-center py-8 border-t border-white mt-8 bg-black">
        <span className="font-bold tracking-widest uppercase mb-2">the athletic <span className="text-2xl align-middle">••</span> rave</span>
        <div className="flex gap-4 mb-2">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Facebook</span>
        </div>
        <span className="text-xs text-gray-400">contato@theathleticrave.com.br | © 2024 THE ATHLETIC RAVE. ALL RIGHTS RESERVED.</span>
      </footer>
    </div>
  );
} 