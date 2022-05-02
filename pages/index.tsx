import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Users from "./users";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gorrio Summer Camp 2022 - recruitment task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://gorrion.io">Gorrion</a> Summer Camp 2022
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <Users/>
      </main>
    </div>
  );
};

export default Home;