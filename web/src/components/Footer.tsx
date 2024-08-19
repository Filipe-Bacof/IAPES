export default function Footer() {
  return (
    <footer className="flex flex-col cursor-default md:flex-row bg-yellow-400 justify-between items-center gap-4 px-4 py-2 rounded-lg">
      <p className="font-semibold">
        CNPJ: 09.195.485/0001-90. Rua Mar das Antilhas, nº19, bairro Chácara
        Cachoeira, Campo Grande - MS, Brasil. iapes.org@gmail.com, Telefones
        para contato: &#40;67&#41; 3326-1844 e &#40;67&#41; 3029-2690.
      </p>
      <button className="flex items-center justify-center w-full md:w-64 rounded-md text-white text-shadow-sm text-lg px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-all duration-300">
        <span className="w-40">Fale Conosco</span>
      </button>
    </footer>
  );
}
