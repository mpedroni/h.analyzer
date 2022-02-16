import type { NextPage } from "next";
import Head from "next/head";
import { Controls } from "../components/Controls";
import { Logo } from "../components/Logo";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>h.analyzer</title>
      </Head>

      <header className={styles.header}>
        <Logo />
      </header>

      <main className={styles.main}>
        <Controls />
      </main>
    </div>
  );
};

export default Home;
