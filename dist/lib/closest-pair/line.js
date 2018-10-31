"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Line {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.distance = this._distance();
    }
    _distance() {
        return Math.sqrt((this.a.x - this.b.x) * (this.a.x - this.b.x) +
            (this.a.y - this.b.y) * (this.a.y - this.b.y));
    }
}
exports.Line = Line;
//# sourceMappingURL=line.js.map