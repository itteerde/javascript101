import { createHash } from 'node:crypto';

export { CheckResults };

class CheckResults {

    static solution_hashes = new Map([
        [1, '072ed3b22611a6c071e4d4435eda63d2c8f7f53d2f150060e05a85a77ff896c5'],
        [2, '8237bc8e789bb8dda033e23383e5ef19836a8883c1b9c668bc9a97593bc45b2c']
    ]);


    /**
     * Checks if the claimed result is indeed the correct solution.
     * 
     * @param {Number} excerciseNo 
     * @param {*} claimedResult 
     */
    static check(excerciseNo, claimedResult) {
        return this.solution_hashes.get(excerciseNo) === createHash('sha256').update((typeof claimedResult) === 'string' ? claimedResult : claimedResult.toString()).digest('hex');
    }
}

//console.log(createHash('sha256').update((111).toString()).digest('hex'));