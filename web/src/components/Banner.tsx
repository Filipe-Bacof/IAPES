import Image from "next/image";

export default function Banner() {
  return (
    <article className="w-full cursor-default flex flex-col md:flex-row justify-center items-center bg-blue-200 mx-4 rounded-lg">
      <Image
        className="w-full md:w-1/2 max-w-[24rem]"
        src="/autismo-laco.png"
        alt="Autismo Laço"
        height={1200}
        width={772}
        priority
      />
      <h2 className="text-3xl font-bold text-center text-blue-800 text-shadow-sm">
        Sobre o IAPES
      </h2>
    </article>
  );
}
