import Banner from "@/components/Banner";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center py-4 gap-4">
      <Header />
      <section className="cursor-default">
        <h2 className="text-center text-red-600 text-2xl font-semibold text-shadow-sm">
          Transtorno do Espectro Autista &#40;TEA&#41;
          <br />
          É mais comum do que podemos imaginar!!
          <br />
          Precisa de tratamentos amparados na pesquisa científica.
        </h2>
      </section>
      <Banner />
      <Donate />
      <Footer />
    </main>
  );
}
