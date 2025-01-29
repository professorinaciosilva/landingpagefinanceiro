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
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
        <li>
          <button
            onClick={() => handleScroll('#detalhes')}
            className="hover:text-[var(--dourado-principal)] transition-colors"
          >
            Detalhes
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll('#sobre')}
            className="hover:text-[var(--dourado-principal)] transition-colors"
          >
            Sobre
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll('#outros')}
            className="hover:text-[var(--dourado-principal)] transition-colors"
          >
            Outros
          </button>
        </li>
      </ul>
    </nav>
  );
}
