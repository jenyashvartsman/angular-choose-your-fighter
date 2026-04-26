import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FighterStore } from '../../store/fighter.store';

@Component({
  selector: 'app-cta-bar',
  templateUrl: './cta-bar.component.html',
  styleUrl: './cta-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBarComponent {
  protected readonly store = inject(FighterStore);

  protected deploy(): void {
    const fighter = this.store.selectedFighter();
    if (fighter) {
      alert(`⚔ ${fighter.name} deployed!\n${this.store.selectedUniverse()?.title} · ${this.store.selectedType()?.title}`);
    }
  }
}
