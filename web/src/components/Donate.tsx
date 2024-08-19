export default function Donate() {
  return (
    <section className="flex flex-col cursor-default md:flex-row bg-green-400 justify-between items-center gap-4 px-4 py-2 rounded-lg">
      <p className="font-semibold">
        Doação OnLine - Realize sua doação de forma rápida e segura em poucos
        segundos. Com a sua ajuda o IAPES seguirá pesquisando Autismo e
        contribuindo para novas descobertas.
      </p>
      <button className="flex items-center justify-center w-full md:w-64 rounded-md text-white text-shadow-sm text-lg px-4 py-2 bg-red-600 cursor-pointer hover:bg-red-800 transition-all duration-300">
        <span className="w-40">Doar Agora</span>
      </button>
    </section>
  );
}
