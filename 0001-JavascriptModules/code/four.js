import { x } from './one.js';
import { x as _x } from './three.js';

console.group('four.js');
x();
_x();
console.groupEnd();