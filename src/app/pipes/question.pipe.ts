import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'question'
})
export class QuestionPipe implements PipeTransform {

  transform(value: string): string {

    if (value?.trim().search(/\?$/) !== -1) {
      return value;
    }
    return value + '?';
  }

}
