export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Entre em Contato</h1>
      
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
          <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea 
            id="mensagem" 
            rows={5} 
            className="w-full p-3 border border-gray-700 rounded-md bg-transparent" 
            placeholder="Digite sua mensagem aqui..."
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Informações de Contato</h2>
        <p className="mb-2">contato@theathletic-rave.com</p>
        <p className="mb-2">+55 (11) 99999-9999</p>
        <p>Av. Paulista, 1000 - São Paulo, SP</p>
      </div>
    </div>
  );
} 