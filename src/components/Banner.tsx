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
      {/* Imagem de fundo */}
      <Image
        src={bannerImage}
        alt="Banner do ebook"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      
      {/* Sobreposição escura para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-white bg-opacity-35"></div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div>
          {/* Título invisível para SEO */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white sr-only">
            Matemática e Educação Financeira
          </h1>

          {/* Título visível com fundo semi-transparente */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 p-4 rounded-lg">  
            Educação Financeira: O Conhecimento que Eleva e Transforma Seu Futuro  
          </h2>  

          <div className="container mx-auto px-4">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-700">Garanta seu Acesso Agora!</h2>
              <p className="text-lg mb-6 text-gray-800">
                Conhecimento essencial e mais completo para sua vida financeira
              </p>
              <a
                href="https://www.amazon.com.br/dp/B0DV9Y4S8R"
                className="inline-block px-6 py-3 m-3 text-lg font-medium text-white hover:text-gray-800 bg-blue-600 rounded-lg hover:bg-[var(--dourado-principal)] transition-colors"
              >
                E-book por R$22,00
              </a>
              <a
                href="https://www.amazon.com/dp/B0DVJ2Z1FD"
                className="inline-block px-6 py-3 m-3 text-lg font-medium text-white hover:text-gray-800 bg-blue-600 rounded-lg hover:bg-[var(--dourado-principal)] transition-colors"
              >
                Livro físico por US$12,00
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

