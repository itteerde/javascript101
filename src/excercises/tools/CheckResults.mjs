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

class CheckResults {

    static solution_hashes = new Map([
        [1, '072ed3b22611a6c071e4d4435eda63d2c8f7f53d2f150060e05a85a77ff896c5'],
        [2, '8237bc8e789bb8dda033e23383e5ef19836a8883c1b9c668bc9a97593bc45b2c'],
        [3, '8aa7cb7ac2bded1851fad4f366b8abd508dc5a76532c47bc3b94bfc57d82f880']
    ]);


    /**
     * Checks if the claimed result is indeed the correct solution.
     * 
     * @param {Number} excerciseNo 
     * @param {*} claimedResult 
     */
    static check(excerciseNo, claimedResult) {
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