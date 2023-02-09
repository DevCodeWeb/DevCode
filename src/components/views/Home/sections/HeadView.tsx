import { Button } from "@/components/atoms/Button";

import style from "@/styles/animation.module.scss";

export const HeadView = () => {
  return (
    <section className="w-screen grid grid-cols-12 gap-[24px] bg-white relative responsive p-0">
      <div className="flex col-span-6 items-right xs:hidden sm:hidden">
        <div className="w-full bg-black rounded-br-2xl shadow-lg py-[100px] px-[48px] flex items-left justify-center h-full flex-col gap-[12px] text-[24px] text-lightBlue font-light">
          <p>{"  <!DOCTYPE html> "}</p>
          <p className="">{"  <html>"}</p>
          <p>{"  <head>"}</p>
          <div className="flex gap-[6px]">
            <p>{"  <title>"}</p>
            <p className="text-white">DevCode</p>
            <p>{"  </title>"}</p>
          </div>
          <p>{"  </head>"}</p>
          <p>{"  <body>"}</p>
          <br />
          <div className=" flex gap-[6px]">
            <p>{"  <h1>"}</p>
            <p className="text-white">Ruscuta David</p>
            <p>{"  </h1>"}</p>
          </div>
          <div className=" flex gap-[6px]">
            <p>{"  <p>"}</p>
            <p className="text-white">Designer & Développeur Web</p>
            <p>{"  </p>"}</p>
          </div>
          <br />
          <p>{"  </body>"}</p>
          <p>{"  </html>"}</p>
        </div>
      </div>
      <div className="col-span-6 bg-white xs:bg-black sm:bg-black xs:h-screen sm:h-screen xs:col-span-12 sm:col-span-12 py-[100px] px-[48px] xs:px-[16px] sm:px-[16px] md:px-[24px] flex flex-col items-between justify-between h-full">
        <div className="flex items-center gap-[12px]">
          <img src="assets/logo.png" alt="logo DevCode" className="w-[48px]" />
          <h3 className="text-grey">David Ruscuta</h3>
        </div>
        <img
          src="assets/decoshapes/vortex.svg"
          alt=""
          className={` ${style.vortex} absolute w-[1000px] top-[200px] left-0 right-0`}
        />
        <div className="z-20 flex flex-col xs:items-center sm:items-center">
          <h1 className="font-extrabold text-black xs:text-white sm:text-white text-[62px]">
            DevCode
          </h1>
          <h2 className="font-light text-black xs:text-white sm:text-white text-[48px] xs:text-[32px]">
            Design & création
            <br />
            de sites internet
          </h2>
        </div>
        <div className="z-20 text-grey">
          <li className="flex xs:flex-col-reverse sm:flex-col-reverse gap-[24px] items-center w-full">
            <Button label="Demander un devis" />

            <ul className="hidden w-full text-center xs:block sm:block md:block">
              Lancez-vous avec un site internet professionel
            </ul>
            <ul className="w-full text-center xs:hidden sm:hidden md:hidden">
              Hébergement
            </ul>
            <ul className="w-full text-center xs:hidden sm:hidden md:hidden">
              Nom de domaine
            </ul>
            <ul className="w-full text-center xs:hidden sm:hidden md:hidden">
              Maintenance
            </ul>
          </li>
        </div>
      </div>
    </section>
  );
};
