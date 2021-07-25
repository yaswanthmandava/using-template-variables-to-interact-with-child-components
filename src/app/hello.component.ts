import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>counter value {{ count }}</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Output() passingData: EventEmitter<any> = new EventEmitter();

  count = 0;
  timeInterval;

  ngOnInit() {
    this.start();
  }

  start() {
    this.timeInterval = setInterval(() => {
      this.count++;
      this.passingData.emit(this.count);
    }, 100);
  }

  reset() {
    this.count = 0;
    clearInterval(this.timeInterval);
    this.passingData.emit(this.count);
  }

  stop() {
    clearInterval(this.timeInterval);
  }
}
