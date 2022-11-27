import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>Te amo</h1>
        <img src="https://media.tenor.com/RKT7m4Br-acAAAAM/goku.gif" />
      </main>
    </div>
  );
}
