// Import stylesheets
import { Observable, interval } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let start = 1;

console.log('app');

let o$ = interval(1000).pipe(
  scan((total, n) => {
    console.log('inside scan', total, n);
    return total + total;
  }, 1),
  startWith(start)
);

o$.subscribe((x) => console.log(x));
