import { HeadView, Clients, Contact, Offers } from "./sections";

export const Home = () => {
  return (
    <main>
      <HeadView />
      <Offers />
      <Clients />
      <Contact />
    </main>
  );
};
