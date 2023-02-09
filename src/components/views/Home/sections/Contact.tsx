import { Button } from "@/components/atoms/Button";

export const Contact = () => {
  return (
    <section className="bg-white responsive py-[150px]">
      <div className="col-span-5 col-start-2 text-black md:col-start-2 xs:col-span-12 sm:col-span-12 xs:text-center sm:text-center">
        <h1 className="font-extrabold text-[62px] mb-[62px] xs:text-[32px xs:text-[32px] sm:text-[32px]">
          Besoin d'un
          <br />
          site internet ?
        </h1>
        <div className="hidden xs:block mb-[24px] sm:block">
          <img src="assets/contact.png" alt="" />
        </div>
        <h3 className="text-[32px] xs:text-[18px] sm:text-[18px] font-light hover:text-mediumBlue cursor-pointer duration-200">
          06 19 22 09 08
        </h3>
        <h3 className="text-[32px] mb-[16px] xs:text-[18px] sm:text-[18px] font-light hover:text-mediumBlue cursor-pointer duration-200">
          contact.devcode@gmail.com
        </h3>
        <Button label="Contacter" />
        <p className="text-[18px] xs:text-[12px] sm:text-[12px] text-grey mt-[62px]">
          Lancez votre marketing digital avec
          <br />
          un site internet professionnel
        </p>
      </div>
      <div className="col-span-5 col-end-12 xs:hidden sm:hidden ">
        <img src="assets/contact.png" alt="" />
      </div>
    </section>
  );
};
