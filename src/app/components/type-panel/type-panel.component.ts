import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { FighterStore } from '../../store/fighter.store';

@Component({
  selector: 'app-type-panel',
  templateUrl: './type-panel.component.html',
  styleUrl: './type-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypePanelComponent {
  protected readonly store = inject(FighterStore);
  protected readonly imgErrors = signal(new Set<string>());

  protected onImgError(typeId: string): void {
    this.imgErrors.update(s => new Set([...s, typeId]));
  }
}
