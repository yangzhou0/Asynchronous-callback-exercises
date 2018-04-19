class Clock {
  constructor() {
    const now = new Date();
    this.format = [now.getHours(), now.getMinutes(),now.getSeconds()];
    this.printTime()


  }

  printTime() {
    console.log(`${this.format[0]}:${this.format[1]}:${this.format[2]}`);
  }

  _tick() {
    setInterval(printTime,1000);
  }
}

const clock = new Clock();
