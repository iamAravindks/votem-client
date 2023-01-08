import Head from 'next/head'
import Hero from "../components/Hero/Hero";


export default function Home() {
  return (
    <>
      <Head>
        <title>VOTEM</title>
        <meta name="description" content="evoting system using blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white  relative">
        <Hero/>
      </main>
    </>
  );
}
