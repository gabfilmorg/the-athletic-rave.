import Card from '../ui/Card';
import Button from '../ui/Button';
import { PACKAGES } from '@/lib/constants';

const dots = [
  <span key={1} className="text-2xl">•</span>,
  <span key={2} className="text-2xl">••</span>,
  <span key={3} className="text-2xl">•••</span>,
];

export default function PackagesSection() {
  return (
    <section className="w-full py-24 bg-black flex flex-col items-center" id="packages">
      <h2 className="text-3xl md:text-5xl font-extrabold font-sans uppercase tracking-tight text-white text-center mb-12">
        CHOOSE YOUR CHALLENGE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {PACKAGES.map((pkg, i) => (
          <Card key={pkg.id} className="flex flex-col items-center bg-black border-white border-2 transition-transform hover:-translate-y-2 hover:shadow-2xl group">
            <div className="mt-8 mb-2 text-white text-2xl font-bold uppercase tracking-widest">{pkg.name}</div>
            <div className="mb-4 text-white/40">{dots[i]}</div>
            <ul className="mb-6 text-white/90 text-sm font-sans space-y-2">
              {pkg.features.split(',').map((f, idx) => (
                <li key={idx}>• {f.trim()}</li>
              ))}
            </ul>
            <div className="text-2xl font-bold text-white mb-6">R$ {pkg.price}</div>
            <Button
              variant="white"
              className="mb-8 w-full max-w-[200px] group-hover:bg-black group-hover:text-white group-hover:border-white group-hover:invert transition-all"
            >
              SIGN UP
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
} 