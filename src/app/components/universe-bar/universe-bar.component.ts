import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FighterStore } from '../../store/fighter.store';

@Component({
  selector: 'app-universe-bar',
  templateUrl: './universe-bar.component.html',
  styleUrl: './universe-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniverseBarComponent {
  protected readonly store = inject(FighterStore);
}
