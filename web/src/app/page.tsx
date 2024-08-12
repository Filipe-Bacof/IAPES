import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center py-4">
      <Header />
      <div>
        <h2 className="text-center text-red-600 text-2xl font-semibold text-shadow-sm">
          Transtorno do Espectro Autista &#40;TEA&#41;
          <br />
          É mais comum do que podemos imaginar!!
          <br />
          Precisa de tratamentos amparados na pesquisa científica.
        </h2>
      </div>
    </main>
  );
}
