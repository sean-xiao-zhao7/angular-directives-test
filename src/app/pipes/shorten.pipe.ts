import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.substr(0, <number>args[0]);
  }
}
