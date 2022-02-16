import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>h.analyzer</title>
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>h.analyzer</h1>
        </header>
      </main>
    </div>
  );
};

export default Home;
