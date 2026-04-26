import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FighterPanelComponent } from './components/fighter-panel/fighter-panel.component';
import { TypePanelComponent } from './components/type-panel/type-panel.component';
import { UniverseBarComponent } from './components/universe-bar/universe-bar.component';

@Component({
  selector: 'app-root',
  imports: [UniverseBarComponent, TypePanelComponent, FighterPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
