import Navigation from './Navigation'; // Importar a navegação

export default function Header() {
  return (
    <header
      className="w-full text-gray-100 shadow-md pt-4 pb-4"
      style={{
        background: `
          radial-gradient(circle, rgba(0, 0, 255, 0.2) 20%, transparent 20%), 
          radial-gradient(circle, rgba(0, 0, 255, 0.1) 30%, transparent 30%),
          linear-gradient(180deg, #1E3A8A, #3B82F6)
        `,
        backgroundSize: '50px 50px, 100px 100px, 100% 100%',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 space-y-4 md:space-y-0">
        {/* Logo e Nome */}
        <p className="flex items-center space-x-4">
          
          <span>Professor Inácio Silva</span>
        </p>

        {/* Título */}
        <h2 className="text-xl font-bold text-center md:text-left">
          O melhor conteúdo para homescholing
        </h2>

        {/* Navegação */}
        <Navigation />
      </div>
    </header>
  );
}
