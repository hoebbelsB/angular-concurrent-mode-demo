import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatAnchor } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app',
  template: `
    <div class="navigation">
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        mat-button
        [routerLink]="['']">
        Blank
      </a>
      <a mat-button routerLinkActive="active" [routerLink]="['native']">
        Native
      </a>
      <a
        href="/scheduled"
        mat-button
        [class.active]="scheduledActive()"
        (click)="navToNativeScheduled($event)">
        Scheduled
      </a>
      <a mat-button routerLinkActive="active" [routerLink]="['concurrent']">
        Concurrent
      </a>
      <a
        mat-button
        routerLinkActive="active"
        [routerLink]="['concurrent-prio']">
        Concurrent prioritized
      </a>
    </div>
    <div class="content">
      <router-outlet />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatRipple, MatAnchor],
  standalone: true,
})
export class AppComponent {
  private router = inject(Router);

  route = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.router.url)
    ),
    {
      requireSync: false,
    }
  );

  scheduledActive = computed(() => this.route() === '/scheduled');

  navToNativeScheduled(event: MouseEvent) {
    event.preventDefault();
    setTimeout(() => {
      this.router.navigate(['scheduled']);
    }, 10);
  }
}
