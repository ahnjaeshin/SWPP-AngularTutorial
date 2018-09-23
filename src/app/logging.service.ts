import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messages: string[] = [];

  log(msg: string): void {
    this.messages.push(msg);
  }
}
