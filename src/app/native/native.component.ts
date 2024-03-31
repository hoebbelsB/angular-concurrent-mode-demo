import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContentComponent } from '../shared/content.component';
import { FooterComponent } from '../shared/footer.component';
import { HeaderComponent } from '../shared/header.component';
import { ListItemComponent } from '../shared/list-item.component';
import { SidebarComponent } from '../shared/sidebar.component';

@Component({
  selector: 'native',
  template: `
    <headerbar />
    <sidebar />
    <main-content>
      <list-item *ngFor="let item of items; let i = index">
        Some Item with index: {{ i }}
      </list-item>
    </main-content>
    <footerbar />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ListItemComponent,
    NgForOf,
  ],
})
export class NativeComponent {
  items = new Array(100).fill(null);
}
