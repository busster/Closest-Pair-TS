import { IPoint, Point } from './point'

export interface ILine {
  a : IPoint;
  b : IPoint;
  distance : number;
}

export class Line implements ILine {
  a : IPoint;
  b : IPoint;
  distance : number;

  constructor (a:IPoint, b:IPoint) {
    this.a = a;
    this.b = b;
    this.distance = this._distance();
  }

  private _distance () : number {
    return Math.sqrt(
      (this.a.x - this.b.x) * (this.a.x - this.b.x) +
      (this.a.y - this.b.y) * (this.a.y - this.b.y)
    )
  }
}
