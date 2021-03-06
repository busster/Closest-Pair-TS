define(["require", "exports", "./line"], function (require, exports, line_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ClosestPair {
        constructor(data) {
            this.S = data;
            this.X = data.slice(0);
            this.Y = data.slice(0);
            this.X.sort(this.sortPoints('x'));
            this.Y.sort(this.sortPoints('y'));
        }
        computeClosestPair() {
            return this.closestPair(this.X, this.Y);
        }
        closestPair(X, Y) {
            const xLen = X.length;
            if (xLen <= 3)
                return this.brute(X);
            const { left, right } = this.divide(X, Y);
            const cpL = this.closestPair(left.X, left.Y);
            const cpR = this.closestPair(right.X, right.Y);
            return this.conquer(left, right, cpL, cpR);
        }
        divide(X, Y) {
            const xLen = X.length;
            const mid = Math.floor(xLen / 2);
            const lY = this.filterByRange(Number.MIN_SAFE_INTEGER, X[mid].x, Y);
            const rY = this.filterByRange(X[mid].x, Number.MAX_SAFE_INTEGER, Y);
            return {
                left: {
                    X: X.slice(0, mid),
                    Y: lY
                },
                right: {
                    X: X.slice(mid),
                    Y: rY
                }
            };
        }
        conquer(left, right, cpL, cpR) {
            const compPoint = right.X[0];
            const delta = Math.min(cpL.distance, cpR.distance);
            const intervalMin = compPoint.x - delta;
            const intervalMax = compPoint.x + delta;
            const zippedY = this.zipPointsByY(left.Y, right.Y);
            const slab = this.getSlab(zippedY, intervalMax, intervalMin);
            const cpS = this.getClosestPairInSlab(slab);
            let smallest = cpL;
            if (cpR.distance < smallest.distance)
                smallest = cpR;
            if (cpS && cpS.distance < smallest.distance)
                smallest = cpS;
            return smallest;
        }
        brute(points) {
            const len = points.length;
            let min = new line_1.Line(points[0], points[1]);
            for (let i = 1; i < len; i++) {
                for (let j = i + 1; j < len; j++) {
                    const l = new line_1.Line(points[i], points[j]);
                    if (l.distance < min.distance)
                        min = l;
                }
            }
            return min;
        }
        getClosestPairInSlab(points) {
            if (points.length < 2)
                return;
            let min = new line_1.Line(points[0], points[1]);
            for (let i = 1; i < points.length; i++) {
                for (let j = i + 1; j <= i + 7 && j < points.length; j++) {
                    const l = new line_1.Line(points[i], points[j]);
                    if (l.distance < min.distance)
                        min = l;
                }
            }
            return min;
        }
        getSlab(points, max, min) {
            return points.filter(p => p.x > min && p.x < max);
        }
        filterByRange(min, max, points) {
            return points.filter(point => point.x >= min && point.x < max);
        }
        sortPoints(prop) {
            return (a, b) => {
                return a[prop] - b[prop];
            };
        }
        zipPointsByY(a, b) {
            let i = 0;
            let j = 0;
            let zippedPoints = [];
            while (i < a.length || j < b.length) {
                while (i < a.length && (j >= b.length || a[i].y < b[j].y)) {
                    zippedPoints.push(a[i]);
                    i++;
                }
                if (j < b.length) {
                    zippedPoints.push(b[j]);
                    j++;
                }
            }
            return zippedPoints;
        }
    }
    exports.default = ClosestPair;
});
