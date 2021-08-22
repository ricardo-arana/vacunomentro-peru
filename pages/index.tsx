import Head from 'next/head';
import { scrape } from '../helpers/reader';
import Image from 'next/image';
import React from 'react';
import Summary from '../components/index/summary';
import TotalPopulationChart from '../components/index/TotalPopulationChart';
import ForkMeComponent from '../components/index/Forkme';
import { PopulationProvider } from '../providers/population';
export default function Home({data, populationPeru}) {
  return (<>
    <Head>
    <title>Vacunometro Perú</title>
    <meta
      name="description"           
      content="Aplicación web para poder revisar rápidamente los indicadores de vacunación del Perú.
               Tambien podemos ver un gráfico de torta que nos pemite ver en el avance de las vacunas"></meta>
    </Head>
    <ForkMeComponent></ForkMeComponent>
    <header className="mb-4 mt-3">
      <div className="text-center fs-1 header"> <Image src="/images/flag-peru.png" alt="peru flag" width={35} height={35} />  Vacunometro Perú 💉</div>
    </header>
    <div className="container">
       <Summary data={data}></Summary>
       <TotalPopulationChart data={data} populationPeru={populationPeru} ></TotalPopulationChart>
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

  const population = new PopulationProvider();
  const populationPeru = (await population.getPopulationPeru()).population;

  return {
    props: {
      data,
      populationPeru
    },
  }
}