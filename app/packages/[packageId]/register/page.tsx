export default function RegisterPage({ 
  params 
}: { 
  params: { packageId: string } 
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-2">Registro</h1>
      <p className="mb-8 text-gray-400">Pacote ID: {params.packageId}</p>
      
      <form className="w-full max-w-md space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome Completo</label>
          <input 
            type="text" 
            id="nome" 
            className="w-full p-3 border border-gray-700 rounded-md bg-transparent" 
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-3 border border-gray-700 rounded-md bg-transparent" 
            placeholder="seu@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium mb-1">Telefone</label>
          <input 
            type="tel" 
            id="telefone" 
            className="w-full p-3 border border-gray-700 rounded-md bg-transparent" 
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
        >
          Completar Registro
        </button>
      </form>
    </div>
  );
} 