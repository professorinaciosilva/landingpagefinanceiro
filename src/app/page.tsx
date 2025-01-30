import Image from 'next/image';
import Banner from '../components/Banner';

export default function Page() {
  return (
    <div className="">
      {/* Banner Principal */}
      <Banner />


      {/* Detalhes do Livro */}
      <section id="detalhes" className="py-12 px-4 bg-white text-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Detalhes do Livro</h2>
          <div className="flex flex-wrap items-center justify-between">
            {/* Imagem do Livro */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/capafinanceiro.jpeg" // Substituir com a imagem real
                alt="Imagem do livro"
                width={400} // Largura máxima padrão
                height={600} // Altura proporcional
                className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              />
            </div>
            {/* Informações do Livro */}
            <div className="w-full md:w-1/2 text-left space-y-4">
              <p className="text-lg leading-relaxed">
                Este livro foi escrito com o objetivo de ser um guia completo ao jovem que inicia sua vida financeira e deseja formar e proteger patrimônio com todo esse conhecimento em um único lugar. Este livro é um guia completo para a sobrevivência financeira em um país em crise. Abaixo os principais capítulos do livro:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Fundamentos da Educação Financeira</li>
                <li>A História da Matemática Financeira</li>
                <li>Matemática Financeira</li>
                <li>Conceito de Valor do Dinheiro no Tempo</li>
                <li>Tomando Decisões Inteligentes: Gasto, Economia e Investimentos</li>
                <li>Compreendendo Empréstimos, Financiamentos e Consórcios</li>
                <li>Criando Fontes de Renda</li>
                <li>Tributação Brasileira</li>
                <li>Formação e proteção de patrimônio</li>
                <li>Tecnologia e Finanças: O Futuro na Palma da Mão</li>
                {/* Adicione mais capítulos aqui */}
              </ul>
              <a href="https://www.amazon.com.br/dp/B0DV9Y4S8R" className="text-blue-600 hover:underline">
                Saiba mais aqui
              </a>
            </div>
          </div>
        </div>


      </section>

      
      {/* Sobre o Autor */}
      <section id="sobre" className="py-12 px-4 bg-gradient-to-r from-blue-100 to-blue-50 text-gray-900">
        <div className="container mx-auto">
          {/* Título Centralizado */}
          <h2 className="text-3xl font-bold text-center mb-8">Sobre o Autor</h2>
          
          {/* Conteúdo Flexível */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
            {/* Imagem do Autor */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <Image
                src="/fotoperfil.png" // Substituir com a imagem real
                alt="Foto do autor"
                width={400}
                height={400}
                className="rounded-full shadow-lg max-w-xs sm:max-w-sm md:max-w-md h-auto"
                loading="lazy"
              />
            </div>

            {/* Texto sobre o Autor */}
            <div className="w-full md:w-1/2 text-left space-y-4 px-4">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-justify">
                  Meu nome é <strong>Inácio Frota da Silva</strong>, professor e escritor. 
                  Escolhi não ser professor de rede pública e preferi a liberdade do ensino 
                  pela internet para estudantes qualificados, que valorizam o ensino, princípios,
                  qualificação profissional, formação de caráter, de família e nobreza.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-justify">
                  Dedico-me a compartilhar conhecimentos e inspirações através das minhas obras e da
                  educação para um Brasil melhor. Acredito na próxima geração que há de vir para resgatar
                  a grandesa de nossa sociedade. Que a verdade liberte as pessoas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-justify">
                  Seja bem vindo à minha turma. Este professor de internet tem grande prazer em 
                  apresentar o melhor ensino que puder.
                </p>
              <a href="https://www.amazon.com.br/dp/B0DV9Y4S8R" className="text-blue-600 hover:underline">
                Saiba mais aqui
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Outros Livros Publicados */}
      <section id="outros" className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Outros Livros Publicados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Livro 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/capalogaritmo.jpg" // Substituir com a imagem real
                alt="Logaritmos para autodidatas e homeschooling"
                width={800}
                height={600}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Logaritmos para autodidatas e homeschooling</h3>
                <p className="text-gray-600 mb-4">
                  Para fornecer uma compreensão abrangente e acessível de Logaritmos para autodidatas ou para aqueles envolvidos no ensino em casa (homeschooling)
                </p>
                <a href="https://www.amazon.com.br/dp/B0DF5W98WT" className="text-blue-600 hover:underline">
                  Saiba mais aqui
                </a>
              </div>
            </div>

            {/* Livro 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/capaalgebra.jpg" // Substituir com a imagem real
                alt="Capa do Livro 2"
                width={800}
                height={600}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Álgebra e teoria dos números para autodidatas e homeschooling</h3>
                <p className="text-gray-600 mb-4">
                  Para quem deseja explorar o fascinante universo da álgebra e da teoria dos números voltado para autodidatas e famílias que praticam homeschooling
                </p>
                <a href="https://www.amazon.com.br/dp/B0DPXYND6Z" className="text-blue-600 hover:underline">
                  Saiba mais aqui
                </a>
              </div>
            </div>

            {/* Livro 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/capafinanceiro.jpeg" // Substituir com a imagem real
                alt="Capa do Livro 3"
                width={800}
                height={600}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Matemática e educação financeira para autodidatas e homeschooling</h3>
                <p className="text-gray-600 mb-4">
                  Matemática e educação financeira para autodidatas e homeschooling
                </p>
                <a href="https://www.amazon.com.br/dp/B0DV9Y4S8R" className="text-blue-600 hover:underline">
                  Saiba mais aqui
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-12 px-4 bg-white text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">O Que as Pessoas Estão Dizendo</h2>
          <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                “Este livro mudou completamente minha forma de lidar com minhas economias.”
              </p>
              <span className="block font-bold">João Silva</span>
            </div>
            <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                “Ideal para homeschooling. Recomendo 100%.”
              </p>
              <span className="block font-bold">Maria Oliveira</span>
            </div>
          </div>
          <div className="mt-6">
            <a href="https://www.amazon.com.br/dp/B0DV9Y4S8R" className="text-blue-600 hover:underline">
              Saiba mais aqui
            </a>
          </div>
        </div>
      </section>

      {/* Seção Garantia */}
      <section className="py-12 px-4 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Garantia de Satisfação</h2>
          <p className="text-lg text-gray-700 mb-6">
            Garantimos 100% de satisfação com este livro, pois trazemos a você um conhecimento que só um bom pai daria para seus filhos. Muita informação objetiva, relevante e preciosa como um farol que guia numa sociedade de muita mentira e necessidade de escravizar o povo.
          </p>
          
        </div>
      </section>
      {/* Seção Compre Agora */}
      <section className="bg-gray-50 text-center pt-8">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-2xl p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Compre Agora</h2>
            <p className="text-lg mb-6 text-gray-700">
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
      </section>

    </div>
  );
}
