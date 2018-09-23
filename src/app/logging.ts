export class Logger {

  messages: string[] = [];

  log(msg: string): void {
    this.messages.push(msg);
  }
}
