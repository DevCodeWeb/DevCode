import { TableSlider } from "@/components/organism/TableSlider";
import { offers } from "@/data/offers";

export const Offers = () => {
  return (
    <section className="responsive bg-white px-[48px] py-[150px] text-black relative">
      <img
        src="assets/decoshapes/decoshape.png"
        alt=""
        className="absolute right-[-150px] bottom-[0px]"
      />
      <img
        src="assets/decoshapes/decoshape.png"
        alt=""
        className="absolute left-[-150px] top-[90px]"
      />
      <h2 className="col-span-12 text-center font-bold text-[32px]">
        Nos offres
      </h2>
      <p className="col-span-12 text-center mb-[52px]">
        Retrouvez juste ici tout ce que nous vous proposons pour votre site
      </p>
      <TableSlider data={offers} />
    </section>
  );
};
