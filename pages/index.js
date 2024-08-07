import Head from "next/head";

function Prompt() {
  return <span className="text-green-400">$</span>;
}

function Link({ href, children }) {
  return (
    <a href={href} className="decoration-blue-500 underline hover:overline">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="grid h-screen">
      <Head>
        <title>@janecakemaster</title>
        <meta name="description" content="@janecakemaster's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="place-self-center">
        <h1 className="text-center text-3xl font-bold tracking-wide py-4">
          @janecakemaster
        </h1>
        <div
          className={`font-mono rounded-md p-4 mx-auto bg-white text-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-[#f1f1f1] shadow-md shadow-[#000000]/10`}
        >
          <p>
            <Prompt /> echo{" "}
            <span className="decoration-fuchsia-400 decoration-dotted underline hover:overline">
              $JANECAKEMASTER
            </span>
          </p>
          <p>
            fullstack js and golang engineer from the dirty jerz 🗽 nyc, az
            🌵...
          </p>
          <p>currently living in sf 🌉</p>
          <p>
            <Link href="https://github.com/janecakemaster">github</Link>{" "}
            <Link href="https://linkedin.com/in/janecakemaster">linkedin</Link>{" "}
          </p>
        </div>
      </main>
    </div>
  );
}
