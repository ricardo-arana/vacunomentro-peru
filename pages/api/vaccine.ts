// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { scrape } from '../../helpers/reader';
import { PopulationProvider } from '../../providers/population';
require('dotenv').config();

type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apikey = req.headers.authorization;
  const envkey = process.env.APIKEY;

  if(envkey === apikey) {
    let data = await scrape('https://www.gob.pe/pongoelhombro');
    const populationProvider = new PopulationProvider()
    const population = await populationProvider.getPopulationPeru();
    data = {...data, totalNoBothDose: population.population - data.totalBothDose};
    res.status(200).json(data);
  } else {
    res.status(401).json({ data: { error: 'authorization'}})
  }
  
  
}
