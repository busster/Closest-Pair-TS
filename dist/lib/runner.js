"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../test-files-ts/index"));
const index_2 = __importDefault(require("./closest-pair/index"));
const point_1 = require("./closest-pair/point");
class Runner {
    runTests() {
        index_1.default.forEach(test => {
            this.runTest(test);
        });
    }
    processTestFile(fileData) {
        return fileData.map(d => d.split(' ').map(n => parseInt(n))).map(pair => new point_1.Point(pair));
    }
    runTest(testFile) {
        const data = this.processTestFile(testFile.data);
        const answer = new index_2.default(data).computeClosestPair();
        this.printTestResults(testFile.name, answer);
    }
    printTestResults(testFile, testAnswer) {
        this.printTest('node', testFile, testAnswer);
        if (typeof window !== 'undefined') {
            this.printTest('window', testFile, testAnswer);
            document.body.style.whiteSpace = 'pre';
        }
    }
    printTest(env, testFile, testAnswer) {
        this.printHeader(env, testFile);
        this.printAnswer(env, testAnswer);
        this.printBreak(env);
    }
    printBreak(env) {
        if (env === 'window') {
            document.write('<br>----------------------------------------------------------------------------<br><br>');
        }
        else {
            console.log('\n----------------------------------------------------------------------------\n\n');
        }
    }
    printHeader(env, testFile) {
        const str = `Calculating Closest Pair for ${testFile}:`;
        if (env === 'window') {
            document.write(`${str}<br>`);
        }
        else {
            console.log(`${str}\n`);
        }
    }
    printAnswer(env, data) {
        const distStr = `Distance: ${data.distance}`;
        const pointsStr = `Points: (${data.a.x}, ${data.a.y}), (${data.b.x}, ${data.b.y})`;
        if (env === 'window') {
            document.write(`    ${distStr}<br>    ${pointsStr}<br>`);
        }
        else {
            console.log(`    ${distStr}\n    ${pointsStr}\n`);
        }
    }
}
exports.default = Runner;
//# sourceMappingURL=runner.js.map