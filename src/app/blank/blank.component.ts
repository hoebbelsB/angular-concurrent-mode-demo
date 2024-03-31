import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blank',
  template: `this is blank`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BlankComponent {}
