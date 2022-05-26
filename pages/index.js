import React, {useState} from 'react';

import Head from 'next/head'
import Image from 'next/image'
import classnames from 'classnames'
import styles from '../styles/Home.module.scss'

export default function Home() {
const [titleAnimation, startTitleAnimation] = useState(false); 
  setTimeout(() => {
    startTitleAnimation(true)
  }, 1000);
  console.log(titleAnimation)
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Arco-Íris 🌈 </title>
        <meta name="description" content="Blog sobre a vida de um ser humano pare da comunidade LGBTQIA+" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={classnames(styles.title, { [styles.animating]: titleAnimation })}>
          Bem vindes ao Blog Arco-Íris 🌈
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
