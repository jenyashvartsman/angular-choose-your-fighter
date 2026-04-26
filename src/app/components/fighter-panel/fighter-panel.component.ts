import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FighterStore } from '../../store/fighter.store';
import { CtaBarComponent } from '../cta-bar/cta-bar.component';
import { FighterCardComponent } from '../fighter-card/fighter-card.component';
import { FighterDetailComponent } from '../fighter-detail/fighter-detail.component';

@Component({
  selector: 'app-fighter-panel',
  imports: [FighterCardComponent, FighterDetailComponent, CtaBarComponent],
  templateUrl: './fighter-panel.component.html',
  styleUrl: './fighter-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FighterPanelComponent {
  protected readonly store = inject(FighterStore);
}
