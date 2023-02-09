import { ClientCard } from "@/components/molecules/ClientCard";
import { clients } from "@/data/clients";

export const Clients = () => {
  return (
    <section className="py-[100px] bg-white text-black responsive  xs:px-[16px] sm:px-[16px] ">
      <h2 className="col-span-12 text-center font-bold text-[32px]">
        Ils nous ont fait confiance
      </h2>
      {clients.map((elm, i) => {
        return (
          <ClientCard
            key={i}
            name={elm.name}
            description={elm.description}
            site={elm.site}
            tag={elm.tag}
            img={elm.img}
          />
        );
      })}
    </section>
  );
};
