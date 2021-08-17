import Head from 'next/head';
import { scrape } from '../helpers/reader';
import Image from 'next/image';
import React from 'react';
import Summary from '../components/index/summary';
import TotalPopulationChart from '../components/index/TotalPopulationChart';
import ForkMeComponent from '../components/index/Forkme';
export default function Home({data}) {
  return (<>
    <Head>
    <title>Vacunometro Perú</title>
    </Head>
    <ForkMeComponent></ForkMeComponent>
    <header className="mb-4 mt-3">
      <div className="text-center fs-1 header"> <Image src="/images/flag-peru.png" alt="peru flag" width={35} height={35} />  Vacunometro Perú 💉</div>
    </header>
    <div className="container">
       <Summary data={data}></Summary>
       <TotalPopulationChart data={data}></TotalPopulationChart>
    </div>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const data = await scrape('https://www.gob.pe/pongoelhombro');

  return {
    props: {
      data,
    },
  }
}