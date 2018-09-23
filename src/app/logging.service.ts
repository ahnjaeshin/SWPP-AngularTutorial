import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  messages: string[] = [];

  log(msg: string): void {
    this.messages.push(msg);
  }
}
