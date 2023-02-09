import { HeadView, Clients, Contact, Offers } from "./sections";

export const Home = () => {
  return (
    <main className="flex flex-col items-center w-screen">
      <HeadView />
      <Offers />
      <Clients />
      <Contact />
    </main>
  );
};
