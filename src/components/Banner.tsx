'use client'; // Necessário para usar hooks e acessar o tamanho da janela

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function Banner() {
  // Hooks para verificar o tamanho da tela
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  // Definir a imagem com base no tamanho da tela
  let bannerImage = '/banner-pc.png'; // Imagem padrão para desktop
  if (isMobile) bannerImage = '/banner-mobile.jpg';
  if (isTablet) bannerImage = '/banner-tablet.jpg';

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
              Livro físico por $12,00
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
