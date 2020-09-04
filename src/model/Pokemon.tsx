import {NextEvolution} from './NextEvolution';

export interface Pokemon {
  id?: number;
  num?: string;
  name?: string;
  img?: string;
  height?: string;
  weight?: string;
  candy?: string;
  candy_count?: number;
  egg?: string;
  spawn_chance?: number;
  avg_spawns?: number;
  spawn_time?: string;

  next_evolution?: NextEvolution[];
  weaknesses?: String[];
  type?: String[];
}
