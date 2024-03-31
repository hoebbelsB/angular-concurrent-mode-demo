import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RxFor } from '@rx-angular/template/for';
import { RxLet } from '@rx-angular/template/let';

import { ContentComponent } from '../shared/content.component';
import { FooterComponent } from '../shared/footer.component';
import { HeaderComponent } from '../shared/header.component';
import { ListItemComponent } from '../shared/list-item.component';
import { SidebarComponent } from '../shared/sidebar.component';

@Component({
  selector: 'concurrent-prio',
  template: `
    <headerbar *rxLet="[]; strategy: 'low'" />
    <sidebar *rxLet="[]" />
    <main-content *rxLet="[]; strategy: 'immediate'">
      <list-item *rxFor="let item of items; let i = index">
        Some Item with index: {{ i }}
      </list-item>
    </main-content>
    <footerbar *rxLet="[]; strategy: 'low'" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    RxLet,
    SidebarComponent,
    ListItemComponent,
    NgForOf,
    RxFor,
  ],
})
export class ConcurrentPrioComponent {
  items = new Array(100).fill(null);
}
