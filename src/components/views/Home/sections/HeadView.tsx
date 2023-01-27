import { Button } from "@/components/atoms/Button";

export const HeadView = () => {
  return (
    <section className="w-screen grid grid-cols-12 gap-[24px] bg-white relative">
      <img
        src="assets/decoshapes/decoshape.png"
        alt=""
        className="absolute right-[-150px] top-[-200px]"
      />
      <div className="col-span-6 bg-black rounded-br-2xl shadow-lg py-[80px] px-[48px] flex items-left justify-center h-full flex-col gap-[12px] text-[24px] text-lightBlue font-light">
        <div className="flex text-grey gap-[12px] mb-[50px]">
          {["Run", "Clients", "Offres", "Hire Me!"].map((elm, i) => {
            return (
              <ul
                key={i}
                className="duration-300 cursor-pointer hover:text-white"
              >
                {elm}
              </ul>
            );
          })}
        </div>
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
      <div className="col-span-6 bg-white py-[100px] pl-[48px] flex flex-col items-between justify-between h-full">
        <div className="flex items-center gap-[12px]">
          <img src="assets/logo.png" alt="logo DevCode" className="w-[48px]" />
          <h3 className="text-grey">David Rusucta</h3>
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold text-black text-[62px]">DevCode</h1>
          <h2 className="font-light text-black text-[48px]">
            Design & création
            <br />
            de sites web
          </h2>
        </div>
        <div className="text-grey">
          <li className="flex gap-[24px] items-center">
            <Button label="Demander un devis" />
            <ul>Hébergement</ul>
            <ul>Nom de domaine</ul>
            <ul>Maintenance</ul>
          </li>
        </div>
      </div>
    </section>
  );
};
