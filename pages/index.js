import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>@janecakemaster</title>
        <meta name="description" content="@janecakemaster's website" />
        {/* TODO favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>@janecakemaster</h1>
        <p className={styles.description}>
          <code className={styles.code}>
            fullstack js/golang engineer from the dirty jerz living in az 🌵
          </code>
        </p>
      </main>
    </div>
  );
}
