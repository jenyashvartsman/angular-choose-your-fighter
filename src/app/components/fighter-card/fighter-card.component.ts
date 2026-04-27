import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

import { FighterDto } from '../../dtos/fighter.dto';

@Component({
  selector: 'app-fighter-card',
  templateUrl: './fighter-card.component.html',
  styleUrl: './fighter-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'fighter-card',
    tabindex: '0',
    role: 'button',
    '[class.fighter-card--selected]': 'selected()',
    '[attr.aria-pressed]': 'selected()',
    '(click)': 'select.emit()',
    '(keydown.enter)': 'select.emit()',
    '(keydown.space)': '$event.preventDefault(); select.emit()',
  },
})
export class FighterCardComponent {
  readonly fighter = input.required<FighterDto>();
  readonly selected = input.required<boolean>();
  readonly select = output<void>();

  protected readonly imgError = signal(false);
}
