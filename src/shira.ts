import * as fs from 'fs'

const text = fs.readFileSync('src/shira.txt', 'utf-8');
const searchTerm = 'shira';

let position = text.indexOf(searchTerm);
let count = 0;
while (position !== -1) {
    count++;
    position = text.indexOf(searchTerm, position + 1);
}

console.log(count);