import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { work } from './util';
import { WorkComponent } from './work.component';

@Component({
  selector: 'main-content',
  template: `
    <div>Content</div>
    <div class="embedded-content"><ng-content /></div>
    <work />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }
      .embedded-content {
        font-size: 24px;
      }
    `,
  ],
  imports: [WorkComponent],
})
export class ContentComponent implements OnInit {
  ngOnInit() {
    this.contentWork();
  }

  contentWork() {
    work();
  }
}
