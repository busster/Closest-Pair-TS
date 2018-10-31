"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(pointData) {
        this.x = pointData[0];
        this.y = pointData[1];
    }
    // static crossProduct (a:IPoint, b:IPoint) : number {
    //   return a.x * b.y - a.y * b.x;
    // }
    // static squareDistance (a:IPoint, b:IPoint) : number {
    //   const xD : number = a.x - b.x;
    //   const yD : number = a.y - b.y;
    //   return xD * xD + yD * yD;
    // }
    static distance(a, b) {
        return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map