import Head from "next/head";
import { Home } from "@/components/views/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Création de sites web</title>
        <meta
          name="description"
          content="Lancez votre marketing digital avec un site web professionnel"
        />
        <meta name="author" content="David Ruscuta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
