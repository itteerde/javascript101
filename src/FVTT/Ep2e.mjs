export { LibEp2e };

class LibEp2e {

    /**
     * 
     * @param {*} min minimum possible
     * @param {*} max maximum possible
     * @returns a random integer from min to max both inclusive using Math.random()
     */
    static randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static isCritical(roll) {
        if (roll % 10 == Math.floor(roll / 10)) {
            return true;
        }
        return false;
    }

    /**
     * Classifies the roll as success or failure.
     * 
     * @param {*} initiating_roll 
     * @param {*} initiating_target 
     * @param {*} affected_roll 
     * @param {*} affected_target 
     * @returns 1 if initiating party wins, 0 otherwise. Numberical for counting.
     */
    static classifyOpposed(initiating_roll, initiating_target, affected_roll, affected_target) {
    }

    /**
     * Classifies the roll as success or failure.
     * 
     * @param {*} roll 
     * @param {*} target 
     * @returns 1 if successful, otherwise 0. Numerical for counting.
     */
    static classifyUnOpposed(roll, target) {
        if (roll <= target) {
            return 1;
        }

        return 0;
    }

    /**
     * Compute distance between a and b.
     * 
     * @param {*} a "source" for this macro
     * @param {*} b "affected" for this macro
     * @param {*} zA elevation of "source". Note that MeasuredTemplate has an elevation.
     * @returns the distance between a and b.
     */
    static distance(a, b, zA = 0) {
        return (
            (a.position.x - b.position.x) ** 2 +
            (a.position.y - b.position.y) ** 2 +
            ((zA != 0 ? zA : a.document.elevation) - b.document.elevation) ** 2
        ) ** 0.5;
    }
}