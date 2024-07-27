import { Button, Link } from "@nextui-org/react";

import mainBgImg from "@/images/main-bg-img.png";

export default function MainPage() {
  return (
    <section className="bg-zinc-950 min-h-screen h-full flex items-center justify-center">
      <div className="relative max-w-[1440px] flex items-center ">
        <img src={mainBgImg} alt="home-bg-img" className="opacity-5 absolute top-[-55px] right-0" />
        <div className="h-full max-w-[1300px] text-center flex flex-col items-center justify-center m-auto gap-4 p-6 md:p-8">
          <h1 className="sm:text-7xl text-5xl sm:leading-relaxed leading-relaxed font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-8">
            СommUnity
          </h1>
          <h2 className="lg:w-[900px] w-[337px] sm:w-full break-all sm:break-normal leading-relaxed mx-auto sm:text-3xl text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-8">
            <span className="flex justify-center sm:inline ">Votre </span>
            partenaire expert en gestion innovante des comptes clients
          </h2>
          <p className="text-zinc-400 sm:text-xl text-sm sm:leading-8 font-medium lg:text-left">
            Chez CommUnite, nous offrons une alternative innovante et complète pour la gestion des
            recevables et le recouvrement des créances. Notre collaboration étroite avec notre
            co-entreprise, le Cabinet d'avocats Maîtres du Recouvrement, nous permet d'offrir une
            solution intégrée unique sur le marché. Notre mission : optimiser la gestion de vos
            comptes clients en combinant encadrement juridique, gestion des recevables, recouvrement
            des mauvaises créances et comptabilité intégrée, le tout grâce à des solutions de
            pointe.
          </p>
          <p className="text-zinc-400 sm:text-xl text-sm sm: font-medium	lg:text-left">
            CommUnite gère le cycle complet de vos créances, vous permettant de vous concentrer sur
            la croissance de votre entreprise. Nous sommes votre allié stratégique pour une gestion
            financière optimale, sécurisée et économique, soutenue par une expertise juridique de
            premier plan.
          </p>

          <div className="flex gap-12 justify-center mb-8 mt-6">
            <div className="relative">
              <div className="after:absolute after:content-[''] after:bg-gradient-to-r from-black from-10% via-cyan-400 via-50% to-black to-90% after:rounded-[2px] after:w-full after:h-px after:-bottom-[1px] after:left-0">
                <Button
                  href="/welcome"
                  as={Link}
                  radius="full"
                  color="default"
                  variant="bordered"
                  className=" text-zinc-400 border-[#ffffff1a]"
                >
                  Learn more
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="after:absolute after:content-[''] after:bg-gradient-to-r from-black from-10% via-cyan-400 via-50% to-black to-90% after:rounded-[2px] after:w-full after:h-px after:-bottom-[1px] after:left-0">
                <Button
                  href="https://github.com/nextui-org/nextui"
                  as={Link}
                  radius="full"
                  color="default"
                  variant="bordered"
                  className=" text-zinc-400 border-[#ffffff1a]"
                >
                  Connecté-nous
                </Button>
              </div>
            </div>
          </div>

          <p className="hidden sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 text-3xl leading-relaxed font-bold">
            CommUnité, Solutions d’avenir
          </p>
        </div>
      </div>
    </section>
  );
}
