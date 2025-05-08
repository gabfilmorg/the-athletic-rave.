import Button from '../ui/Button';
import Logo from '../ui/Logo';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Video background (placeholder) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        src="/videos/hero-placeholder.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-mobile.jpg"
      />
      {/* Static image for mobile */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden"
        src="/images/hero-mobile.jpg"
        alt="Athletic Rave Hero"
      />
      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-24 pb-16">
        {/* Navigation */}
        <nav className="absolute top-6 left-0 w-full flex items-center justify-between px-8">
          <Logo size={28} />
          <ul className="flex gap-8 text-xs md:text-sm font-semibold uppercase tracking-widest">
            <li><a href="#packages">Packages</a></li>
            <li><a href="#event">The Event</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </nav>
        {/* Headline */}
        <div className="flex flex-col items-center mt-16 md:mt-32">
          <h1 className="text-white font-sans font-extrabold text-4xl md:text-7xl uppercase tracking-tight text-center leading-none drop-shadow-xl">
            RUN BEYOND<br />LIMITS.<br />
            <span className="block mt-2">RIDE INTO<br />THE FUTURE.</span>
          </h1>
          <Button className="mt-10 px-10 py-4 text-lg md:text-xl font-bold transition-transform hover:scale-105 hover:shadow-lg" variant="white">
            CHOOSE YOUR PACKAGE
          </Button>
        </div>
      </div>
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/60 z-0" />
    </section>
  );
} 