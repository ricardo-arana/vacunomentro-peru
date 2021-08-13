import Head from 'next/head';
import { scrape } from '../helpers/reader';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import React from 'react';
import Summary from '../components/index/summary';
import TotalPopulationChart from '../components/index/TotalPopulationChart';
export default function Home({data}) {
  return (<>
    <Head>
    <title>Vacunometro Perú</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
    </Head>
    <header className="mb-4 mt-3">
      <div className="text-center fs-1"> <Image src="/images/flag-peru.png" alt="peru flag" width={35} height={35} />  Vacunometro Perú 💉</div>
    </header>
    <div className="container">
       <Summary data={data}></Summary>
       <TotalPopulationChart data={data}></TotalPopulationChart>
    </div>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const data = await scrape('https://www.gob.pe/pongoelhombro');
  console.log(data);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}