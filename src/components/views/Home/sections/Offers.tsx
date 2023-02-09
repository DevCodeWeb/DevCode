import { TableSlider } from "@/components/organism/TableSlider";
import { offers } from "@/data/offers";

export const Offers = () => {
  return (
    <section className="responsive bg-white px-[48px] py-[150px] text-black relative">
      <h2 className="col-span-12 text-center font-bold text-[32px]">
        Nos offres
      </h2>
      <p className="col-span-12 text-center mb-[32px] text-[20px]">
        Retrouvez juste ici tout ce que nous
        <br />
        vous proposons pour le développement de votre site internet
      </p>
      <TableSlider data={offers} />
    </section>
  );
};
