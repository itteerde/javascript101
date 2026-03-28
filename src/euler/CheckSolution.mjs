import { createHash } from 'node:crypto';

export { CheckSolution };

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

class CheckSolution {

    static solution_hashes = new Map([
        [1, 'c0b20f4665d0388d564f0b6ecf3edc9f9480cb15fff87198b95701d9f5fe1f7b'],
        [2, '1f5882e19314ac13acca52ad5503184b3cb1fd8dbeea82e0979d799af2361704'],
        [3, '5c09f0554518a413e58e6bc5964ba90655713483d0b2bbc94572ad6b0b4dda28'],
        [4, 'aa74f52b4c428d89606b411bc165eb81a6266821ecc9b4f30cdb70c5c930f4d9'],
        [5, '1ba90ab11bfb2d2400545337212b0de2a5c7f399215175ade6396e91388912b1'],
        [6, '537942be3eb323c507623a6a73fa87bf5aeb97b7c7422993a82aa7c15f6d9cd6'],
        [8, 'b9fb30b6553415e9150051ce5710a93d0f55b22557c0068d8e16619a388f145a'],
        [13, '3cb265a96c5645a9ad11d47551f015c25f3f99792c951617656d84626fbc4868'],
        [14, '78a262dd40eba0f7195686ec7f3891a39437523456f8d16fa9065a34409eeac6'],
        [15, '7b8f812ca89e311e1b16b903de76fa7b0800a939b3028d9dc4d35f6fa4050281'],
        [16, 'a6f988d30328bd706c66f8ac0d92aac21dd732149cdd69cb31f459dca20c5abe'],
        [17, '1a455b216c6e916943acf3fa4c7e57a7a5cac66d97cc51befca810c223ef9c23'],
        [18, 'fde3f2e7127f6810eb4160bf7bb0563240d78c9d75a9a590b6d6244748a7f4ff'],
        [20, 'c86a2932e1c79343a3c16fb218b9944791aaeedd3e30c87d1c7f505c0e588f7c'],
        [67, '53f66b6783cb7552d83015df01b0d5229569fce1dd7d1856335c7244b9a3ded6']
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
        return { excerciseNo: excerciseNo, solution: claimedResult, correct: this.solution_hashes.get(excerciseNo) === hash, hash: hash };
    }
}
