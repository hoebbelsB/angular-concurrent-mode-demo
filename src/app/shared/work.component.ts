import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'work',
  template: `
    @for (w of workItems(); track w) {
      <div>
        @for (w of workItems(); track w) {
          <div></div>
        }
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class WorkComponent {
  work = input<number>(10);

  workItems = computed(() => new Array(this.work()).fill(null));
}
