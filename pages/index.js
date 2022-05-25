import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Arco-Íris 🌈 </title>
        <meta name="description" content="Blog sobre a vida de um ser humano pare da comunidade LGBTQIA+" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindes ao Blog Arco-Íris
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
        
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
