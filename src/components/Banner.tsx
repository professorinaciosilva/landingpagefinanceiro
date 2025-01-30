'use client'; // Necessário para usar hooks no Next.js

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Hook personalizado para obter o tamanho da tela
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Atualiza o tamanho da tela quando o componente é montado ou redimensionado
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Inicializa o tamanho
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default function Banner() {
  const { width } = useWindowSize();

  // Determina o banner com base no tamanho da tela
  let bannerImage: string = '/banner-default.jpg';
  if (width >= 1025) {
    bannerImage = '/banner-pc.png';
  } else if (width >= 641 && width <= 1024) {
    bannerImage = '/banner-tablet.png';
  } else if (width <= 640) {
    bannerImage = '/banner-mobile.png';
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Banner responsivo com diferentes imagens */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerImage}
          alt="Banner do ebook"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Texto sobreposto ao banner */}
      <div className="relative z-10 h-full flex items-center justify-center bg-black bg-opacity-20 text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Matemática e Educação Financeira
          </h1>
          <div className="container mx-auto px-4">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-100">Compre Agora</h2>
              <p className="text-lg mb-6 text-gray-100">
                Conhecimento essencial e mais completo para sua vida financeira
              </p>
              <a
                href="https://www.amazon.com.br/dp/B0DV9Y4S8R"
                className="inline-block px-6 py-3 m-3 text-lg font-medium text-white hover:text-gray-700 bg-blue-600 rounded-lg hover:bg-[var(--dourado-principal)] transition-colors"
              >
                E-book por R$22,00
              </a>
              <a
                href="#"
                className="inline-block px-6 py-3 m-3 text-lg font-medium text-white hover:text-gray-700 bg-blue-600 rounded-lg hover:bg-[var(--dourado-principal)] transition-colors"
              >
                Livro físico por R$12,00
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

