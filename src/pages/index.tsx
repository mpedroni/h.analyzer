import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

import { Controls } from "../components/Controls";
import { HarmonicField } from "../components/HarmonicField";
import { Logo } from "../components/Logo";

const Home: NextPage = () => {
  const [enharmonic, setEnharmonic] = useState("natural");
  const [chordScheme, setChordScheme] = useState("triads");
  const [chordType, setChordType] = useState("major");
  const [activeKey, setActiveKey] = useState("C");

  return (
    <div className={styles.container}>
      <Head>
        <title>h.analyzer</title>
      </Head>

      <header className={styles.header}>
        <Logo />
      </header>

      <main className={styles.main}>
        <Controls
          activeKey={activeKey}
          chordScheme={chordScheme}
          chordType={chordType}
          enharmonic={enharmonic}
          onSetActiveKey={setActiveKey}
          onSetChordScheme={setChordScheme}
          onSetChordType={setChordType}
          onSetEnharmonic={setEnharmonic}
        />

        {!!activeKey ? (
          <HarmonicField activeKey={activeKey} />
        ) : (
          <span>Selecione um tom para ver seu campo harmômico</span>
        )}
      </main>
    </div>
  );
};

export default Home;
