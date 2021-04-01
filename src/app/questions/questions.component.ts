import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from '../models/poll-state.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class PollsComponent {
  @Input() questions$: Observable<Questions>;

    orderByTimestamp = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.value.timestamp > b.value.timestamp ? 1 : -1;
  }

}
