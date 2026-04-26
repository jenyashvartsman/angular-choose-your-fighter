export interface UniverseDto {
  id: string;
  title: string;
  fighterTypes: FighterTypeDto[];
}

export interface FighterTypeDto {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  fighters: FighterDto[];
}

export interface FighterDto {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  stats: FighterStatsDto;
}

export interface FighterStatsDto {
  strength: number;
  agility: number;
  power: number;
}
