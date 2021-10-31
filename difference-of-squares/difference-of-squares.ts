export class Squares {

  private _count: number;

  constructor(count: number) {
    this._count = count;
  }

  get sumOfSquares(): number {
    let sum = 0;
    for (let i = 1; i <= this._count; i++) {
      sum += Math.pow(i, 2);
    }
    return sum;
  }

  get squareOfSum(): number {
    let sum = 0;
    for (let i = 0; i <= this._count; i++) {
      sum += i;
    }
    return Math.pow(sum, 2);
  }

  get difference(): unknown {
    return this.squareOfSum - this.sumOfSquares;
  }
}
