import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { work } from './util';
import { WorkComponent } from './work.component';

@Component({
  selector: 'headerbar',
  template: `Headerbar <work />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [WorkComponent],
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    this.headerWork();
  }

  headerWork() {
    work();
  }
}
