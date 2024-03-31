import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RxLet } from '@rx-angular/template/let';

import { ContentComponent } from '../shared/content.component';
import { FooterComponent } from '../shared/footer.component';
import { HeaderComponent } from '../shared/header.component';
import { ListItemComponent } from '../shared/list-item.component';
import { SidebarComponent } from '../shared/sidebar.component';

@Component({
  selector: 'concurrent',
  standalone: true,
  imports: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    RxLet,
    NgForOf,
    ListItemComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <headerbar *rxLet="[]" />
    <sidebar *rxLet="[]" />
    <main-content *rxLet="[]">
      <list-item *ngFor="let item of items; let i = index">
        Some Item with index: {{ i }}
      </list-item>
    </main-content>
    <footerbar *rxLet="[]" />
  `,
})
export class ConcurrentComponent {
  items = new Array(100).fill(null);
}
