import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fleuriste</title>
        <meta name="description" content="Le meilleur fleuriste de la ville" />
      </Head>
      <main>
        <h1>Bienvenue chez notre Fleuriste</h1>
        <p>Découvrez nos magnifiques bouquets et arrangements floraux.</p>
      </main>
    </div>
  );
}
