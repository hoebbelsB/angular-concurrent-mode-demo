import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { work } from './util';
import { WorkComponent } from './work.component';

@Component({
  selector: 'footerbar',
  template: `Footer <work />`,
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
export class FooterComponent implements OnInit {
  ngOnInit() {
    this.footerWork();
  }

  footerWork() {
    work();
  }
}
