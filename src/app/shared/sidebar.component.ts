import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { work } from './util';
import { WorkComponent } from './work.component';

@Component({
  selector: 'sidebar',
  template: `Sidebar <work />`,
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
export class SidebarComponent implements OnInit {
  ngOnInit() {
    this.sidebarWork();
  }

  sidebarWork() {
    work();
  }
}
