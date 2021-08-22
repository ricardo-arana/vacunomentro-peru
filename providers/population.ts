import { PopulationBodyModel, PopulationModel } from '../models/population.models';

export class PopulationProvider {
  async getPopulationPeru(): Promise<PopulationBodyModel> {
    const url = 'https://world-population.p.rapidapi.com/population?';
    const params = new URLSearchParams({ country_name: 'Peru' });
    const headers = {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'world-population.p.rapidapi.com',
      'x-rapidapi-key': '63df2b4f3bmshb46c75622f6460bp1db009jsn2179a7aa6081',
    };

    const req = await fetch(url + params, {
      method: 'GET',
      headers,
    });

    const data: PopulationModel = await req.json();

    return data.body;
  }
}
