import Link from "next/link";

const packages = [
  { id: 1, name: "Pacote Básico", price: 99.99, description: "Acesso básico aos equipamentos" },
  { id: 2, name: "Pacote Premium", price: 199.99, description: "Acesso completo aos equipamentos" },
  { id: 3, name: "Pacote VIP", price: 299.99, description: "Acesso total com acompanhamento personalizado" }
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-12">Nossos Pacotes</h1>
      
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border border-gray-700 rounded-lg p-6 hover:border-white transition-colors">
            <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
            <p className="text-3xl font-bold mb-4">R$ {pkg.price}</p>
            <p className="text-gray-400 mb-6">{pkg.description}</p>
            <Link 
              href={`/packages/${pkg.id}/register`}
              className="block w-full py-2 bg-white text-black text-center font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              Inscrever-se
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 