import Head from "next/head";

export default function Home() {
  return (
    <div className="grid h-screen">
      <Head>
        <title>@janecakemaster</title>
        <meta name="description" content="@janecakemaster's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="place-self-center">
        <h1 className="text-center">@janecakemaster</h1>
        <div>
          <p>
            <code>
              fullstack js/golang engineer from the dirty jerz living in az 🌵
            </code>
          </p>
        </div>
      </main>
    </div>
  );
}
