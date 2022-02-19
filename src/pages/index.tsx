import { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

import { Controls } from "../components/Controls";
import { HarmonicField } from "../components/HarmonicField";
import { Logo } from "../components/Logo";

import { SCALES_VARIANTS, ScaleVariant } from "../utils/scales";

const Home: NextPage = () => {
  const [scaleVariant, setScaleVariant] = useState<ScaleVariant>(
    SCALES_VARIANTS.natural
  );
  const [chordScheme, setChordScheme] = useState("triads");
  const [chordType, setChordType] = useState("major");
  const [activeScale, setActiveKey] = useState("");

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
          activeScale={activeScale}
          scaleVariant={scaleVariant}
          chordScheme={chordScheme}
          chordType={chordType}
          onSetActiveScale={setActiveKey}
          onSetChordScheme={setChordScheme}
          onSetChordType={setChordType}
          onSetScaleVariant={setScaleVariant}
        />

        {!!activeScale ? (
          <HarmonicField scaleCode={activeScale} />
        ) : (
          <span>Selecione uma escala para ver seu campo harmômico</span>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 1 day
  };
};

export default Home;
