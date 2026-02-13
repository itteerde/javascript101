import { createHash } from 'node:crypto';

// mockup, that would be a real database to be accessed in real life. Note that the password is not in the database, and the password cannot be restored from the hash.
const db = new Map();
db.set("PhDave", {
    username: 'PhDave',
    password: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
})

let username = undefined;
let password = undefined;

for (const a of process.argv) {

    if (a.toLocaleLowerCase().startsWith("--password=")) {
        password = a.slice(11, a.length);
        console.log({ password: password, hash: createHash('sha256').update(password).digest('hex') });
    }

    if (a.toLocaleLowerCase().startsWith("--username=")) {
        username = a.slice(11, a.length);
        console.log({ username: username });
    }
}

if ((!username) || (!password)) {
    throw new Error("--username=<username> and --password=<password> needed");
}

if (db.get(username)?.password?.localeCompare(createHash('sha256').update(password).digest('hex')) !== 0) { // IRL one should hash in the client (the import would be something from they browser crypto API, and only username and hash ever being sent over the internet, therefore making it safe[ish] even against men in the middle [if they would intercept the account creating they could send their hash instead and later use it. But the user would never be able to lock in, unless the man in the middle would be persistent {like it might be in fishing attacks}])
    throw new Error(`wrong username or password, ${username}, ${password}`);
}

console.log(`Welcome to nothing, ${username}`);
