import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import { fightersData } from '../data/fighters.data';
import { FighterDto, FighterTypeDto, UniverseDto } from '../dtos/fighter.dto';

export const FighterStore = signalStore(
  { providedIn: 'root' },

  withState({
    universes: fightersData,
    universeId: null as string | null,
    typeId: null as string | null,
    fighterId: null as string | null,
  }),

  withComputed(({ universes, universeId, typeId, fighterId }) => ({
    selectedUniverse: computed((): UniverseDto | null =>
      universes().find((u) => u.id === universeId()) ?? null
    ),

    availableTypes: computed((): FighterTypeDto[] =>
      universes().find((u) => u.id === universeId())?.fighterTypes ?? []
    ),

    selectedType: computed((): FighterTypeDto | null => {
      const universe = universes().find((u) => u.id === universeId());
      return universe?.fighterTypes.find((t) => t.id === typeId()) ?? null;
    }),

    availableFighters: computed((): FighterDto[] => {
      const universe = universes().find((u) => u.id === universeId());
      const type = universe?.fighterTypes.find((t) => t.id === typeId());
      return type?.fighters ?? [];
    }),

    selectedFighter: computed((): FighterDto | null => {
      const universe = universes().find((u) => u.id === universeId());
      const type = universe?.fighterTypes.find((t) => t.id === typeId());
      return type?.fighters.find((f) => f.id === fighterId()) ?? null;
    }),

    canDeploy: computed(() => fighterId() !== null),
  })),

  withMethods((store) => ({
    selectUniverse(id: string): void {
      patchState(store, { universeId: id, typeId: null, fighterId: null });
    },

    selectType(id: string): void {
      patchState(store, { typeId: id, fighterId: null });
    },

    selectFighter(id: string | null): void {
      patchState(store, { fighterId: id });
    },
  }))
);
