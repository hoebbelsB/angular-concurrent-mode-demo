import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { work } from './util';

@Component({
  selector: 'list-item',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ListItemComponent implements OnInit {
  ngOnInit() {
    this.listItemWork();
  }

  listItemWork() {
    work(1000, 1000);
  }
}
