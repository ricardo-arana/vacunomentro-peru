import { PopulationBodyModel, PopulationModel } from '../models/population.models';

export class PopulationProvider {
  async getPopulationPeru(): Promise<PopulationBodyModel> {
    const url = 'https://world-population.p.rapidapi.com/population?';
    const params = new URLSearchParams({ country_name: 'Peru' });
    const headers = {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'world-population.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    };

    const req = await fetch(url + params, {
      method: 'GET',
      headers,
    });

    const data: PopulationModel = await req.json();

    return data.body;
  }
}
