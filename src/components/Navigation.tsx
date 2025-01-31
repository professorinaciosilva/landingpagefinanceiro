'use client'; // Habilitar o Client Component

export default function Navigation() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="flex flex-row space-x-4 overflow-x-auto">
        <li>
          <button
            onClick={() => handleScroll('#detalhes')}
            className="hover:text-[var(--dourado-principal)] transition-colors text-sm md:text-base"
          >
            Detalhes
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll('#sobre')}
            className="hover:text-[var(--dourado-principal)] transition-colors text-sm md:text-base"
          >
            Sobre
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll('#outros')}
            className="hover:text-[var(--dourado-principal)] transition-colors text-sm md:text-base"
          >
            Outros
          </button>
        </li>
      </ul>
    </nav>
  );
}
