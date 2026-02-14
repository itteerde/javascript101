import { Level } from 'level';

const db = new Level('./data/armors', { valueEncoding: 'json' });

async function browseDatabase() {
    console.log('--- Database Contents ---');

    // This will iterate through every key-value pair in alphabetical order
    for await (const [key, value] of db.iterator()) {
        console.log({ key: key, value: value });
    }
}

browseDatabase();

//console.log(await db.get('!items!yJFp1bfpecDcStVK'));