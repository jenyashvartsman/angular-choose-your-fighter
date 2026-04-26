import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { FighterDto } from '../../dtos/fighter.dto';

@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrl: './fighter-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'fighter-detail' },
})
export class FighterDetailComponent {
  readonly fighter = input.required<FighterDto>();
  readonly close = output<void>();

  protected readonly stats = computed(() => {
    const { strength, agility, power } = this.fighter().stats;
    return [
      { label: 'STR', value: strength },
      { label: 'AGI', value: agility },
      { label: 'PWR', value: power },
    ];
  });
}
