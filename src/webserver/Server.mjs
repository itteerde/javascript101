import { createServer } from 'node:http';
import { Dice } from '../Dice.mjs';

/**
 * Terrible unsafe code, but it is a webserver that will do something Daggerheart-related. Of course a real VTT needs to do so much more to be of any use. But this is how things do indeed start.
*/

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello World, rolled hope: ${Dice.roll(1, 12)}, fear: ${Dice.roll(1, 12)}.`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
