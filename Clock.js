class Clock {
  constructor() {
    const now = new Date();
    this.hr = now.getHours();
    this.min = now.getMinutes();
    this.sec = now.getSeconds();

    this.printTime()
    setInterval(this._tick.bind(this),1000)

  }

  printTime() {
    console.log(`${this.hr}:${this.min}:${this.sec}`);

  }

  _tick() {
    this.increaseSec();
    this.printTime();
  }

  increaseSec(){
    this.sec += 1;
    if (this.sec === 60){
      this.sec = 0;
      this.increaseMin();
    }
  }

  increaseMin(){
    this.min += 1;
    if (this.min === 60){
      this.min =0;
      this.increaseHr();
    }
  }

  increaseHr(){
    this.hr+=1;
    this.hr = this.hr%24;
  }
}

const clock = new Clock();
