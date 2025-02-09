import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import FacebookPixel from '@/components/FacebookPixel';

export const metadata = {
  title: 'Matemática & Educação Financeira',
  description: 'Ebook para autodidatas e homeschooling.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="pt-BR">
      
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen m-0 p-0">
        <Header />
        <main className="w-full flex-1">
          <FacebookPixel />
          {children}
        </main>
        <Footer />
      </body>
    </html>

  );
}
