import Tests from '../test-files-ts/index';
import ClosestPair from './closest-pair/index';
import { IPoint, Point } from './closest-pair/point'
import { ILine } from './closest-pair/line'

interface TestObject {
  name : string,
  data : Array<string>
}

export default class Runner {
  runTests () {
    Tests.forEach(test => {
      this.runTest(test);
    });
  }

  processTestFile (fileData : Array<string>) {
    return fileData.map(d => d.split(' ').map(n => parseInt(n))).map(pair => new Point(pair))
  }

  runTest (testFile: TestObject) {
    const data = this.processTestFile(testFile.data);
    const answer = new ClosestPair(data).computeClosestPair();
    this.printTestResults(testFile.name, answer);
  }

  printTestResults (testFile:string, testAnswer:ILine) {
    this.printTest('node', testFile, testAnswer);
    if (typeof <any>window !== 'undefined') {
      this.printTest('window', testFile, testAnswer);
      document.body.style.whiteSpace = 'pre'
    }
  }

  printTest (env:string, testFile:string, testAnswer:ILine) {
    this.printHeader(env, testFile);
    this.printAnswer(env, testAnswer);
    this.printBreak(env)
  }

  printBreak (env:string) {
    if (env === 'window') {
      document.write('<br>----------------------------------------------------------------------------<br><br>')
    } else {
      console.log('\n----------------------------------------------------------------------------\n\n')
    }
  }

  printHeader (env:string, testFile:string) {
    const str = `Calculating Closest Pair for ${testFile}:`
    if (env === 'window') {
      document.write(`${str}<br>`)
    } else {
      console.log(`${str}\n`)
    }
  }

  printAnswer (env:string, data:ILine) {
    const distStr = `Distance: ${data.distance}`;
    const pointsStr = `Points: (${data.a.x}, ${data.a.y}), (${data.b.x}, ${data.b.y})`
    if (env === 'window') {
      document.write(`    ${distStr}<br>    ${pointsStr}<br>`)
    } else {
      console.log(`    ${distStr}\n    ${pointsStr}\n`)
    }
  }
}
