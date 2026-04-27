import { UniverseDto } from '../dtos/fighter.dto';
import { duneConfig } from './dune.config';
import { lordOfTheRingsConfig } from './lord-of-the-rings.config';
import { marvelConfig } from './marvel.config';
import { starWarsConfig } from './star-wars.config';
import { warhammerConfig } from './warhammer.config';

export const fightersData: UniverseDto[] = [
  warhammerConfig,
  starWarsConfig,
  lordOfTheRingsConfig,
  duneConfig,
  marvelConfig,
];
