export interface PopulationModel {
  ok: boolean;
  body: PopulationBodyModel;
}

export interface PopulationBodyModel {
  country_name: string;
  population: number;
  rankings: number;
  world_share: number;
}
