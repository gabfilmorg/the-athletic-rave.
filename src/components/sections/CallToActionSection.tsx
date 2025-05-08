import Button from '../ui/Button';

export default function CallToActionSection() {
  return (
    <section className="w-full bg-black py-20 flex flex-col items-center" id="register">
      <h2 className="text-4xl md:text-6xl font-extrabold font-sans uppercase tracking-tight text-white text-center mb-6">
        SPOTS ARE LIMITED.
      </h2>
      <p className="text-white/80 text-lg md:text-2xl font-sans text-center mb-10">
        THE ATHLETIC RAVE AWAITS. ARE YOU READY?
      </p>
      <Button className="px-12 py-5 text-2xl font-bold transition-transform hover:scale-110 hover:shadow-2xl" variant="white">
        REGISTER YOUR RAVE
      </Button>
    </section>
  );
} 