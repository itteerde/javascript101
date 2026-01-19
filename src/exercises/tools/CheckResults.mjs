import { createHash } from 'node:crypto';

export { CheckResults };

function replacer(key, value) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}

function reviver(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

class CheckResults {

    static solution_hashes = new Map([
        [1, '072ed3b22611a6c071e4d4435eda63d2c8f7f53d2f150060e05a85a77ff896c5'],
        [2, '8237bc8e789bb8dda033e23383e5ef19836a8883c1b9c668bc9a97593bc45b2c'],
        [3, '8aa7cb7ac2bded1851fad4f366b8abd508dc5a76532c47bc3b94bfc57d82f880'],
        [4, 'a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0'],
        [5, 'd4b5525dcd56388bdff8ac8ed7d81199df7a999fd35129b99e0bb40bc086f813'],
        [6, '5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca']
    ]);


    /**
     * Checks if the claimed result is indeed the correct solution.
     * 
     * @param {Number} excerciseNo 
     * @param {*} claimedResult 
     */
    static check(excerciseNo, claimedResult) {

        if (!claimedResult || !excerciseNo) {
            return { excerciseNo: excerciseNo, correct: false, hash: undefined, message: 'no adequate parameters provided' };
        }

        let solutionString;
        if ((typeof claimedResult) === 'string') {
            solutionString = claimedResult;
        }
        if ((typeof claimedResult) === 'number') {
            solutionString = claimedResult.toString();
        }
        if (claimedResult instanceof Map) {
            solutionString = JSON.stringify(claimedResult, replacer);
        }
        let hash = createHash('sha256').update(solutionString).digest('hex');
        return { excerciseNo: excerciseNo, correct: this.solution_hashes.get(excerciseNo) === hash, hash: hash };
    }
}

//console.log(createHash('sha256').update((111).toString()).digest('hex'));