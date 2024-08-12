import IconBxsUserCircle from "@/icons/IconBxsUserCircle";
import IconFacebook from "@/icons/IconFacebook";
import IconGooglePlus from "@/icons/IconGooglePlus";
import IconInstagram from "@/icons/IconInstagram";
import IconYoutube from "@/icons/IconYoutube";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Sobre o IAPES",
    link: "/",
  },
  {
    id: 2,
    name: "O que fazemos",
    link: "/",
  },
  {
    id: 3,
    name: "Como ajudar",
    link: "/",
  },
  {
    id: 4,
    name: "Notícias",
    link: "/",
  },
  {
    id: 5,
    name: "Nossas publicações",
    link: "/",
  },
  {
    id: 6,
    name: "Transparência",
    link: "/",
  },
  {
    id: 7,
    name: "Nossa Equipe",
    link: "/",
  },
];

export default function Header() {
  return (
    <header className="flex flex-col mx-4 md:flex-row gap-2">
      <Image
        className="w-full h-auto md:w-2/12"
        src="/iapes-logo.jpg"
        alt="IAPES Logo"
        width={200}
        height={200}
        priority
      />
      <div className="flex flex-col items-center justify-center w-full md:w-10/12">
        <h1 className="text-2xl font-semibold text-center">
          IAPES - Compromisso com o Autismo
        </h1>
        <div className="flex flex-col md:flex-row w-full gap-2 border-b-4 border-blue-300 py-4">
          <button className="bg-amber-400 hover:bg-amber-500 border border-amber-800 transition-all duration-200 h-12 font-medium text-sm w-full md:w-1/4 rounded-md px-2 py-1">
            Nosso Contato:
            <br />
            &#40;67&#41; 00000-0000
          </button>
          <button className="bg-lime-400 hover:bg-lime-500 border border-lime-800 transition-all duration-200 h-12 font-medium text-sm w-full md:w-1/4 rounded-md px-2 py-1">
            Faça sua Doação Online
          </button>
          <button className="bg-orange-400 hover:bg-orange-500 border border-orange-800 transition-all duration-200 h-12 font-medium text-sm w-full md:w-1/4 rounded-md px-2 py-1">
            Faça sua Doação Online
          </button>
          <div className="items-center justify-center h-12 flex w-full md:w-1/4 gap-1 px-2 py-1">
            <IconFacebook className="text-blue-950 text-3xl transition-all duration-200 hover:text-blue-800 cursor-pointer" />
            <IconGooglePlus className="text-blue-950 text-3xl transition-all duration-200 hover:text-blue-800 cursor-pointer" />
            <IconInstagram className="text-blue-950 text-3xl transition-all duration-200 hover:text-blue-800 cursor-pointer" />
            <IconYoutube className="text-blue-950 text-3xl transition-all duration-200 hover:text-blue-800 cursor-pointer" />
            <IconBxsUserCircle className="text-red-600 text-3xl transition-all duration-200 hover:text-red-800 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between items-center py-4 gap-2">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="bg-zinc-100 hover:bg-zinc-300 transition-all text-center items-center flex justify-center border border-zinc-400 duration-200 h-12 font-medium text-sm w-full rounded-md px-2 py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
