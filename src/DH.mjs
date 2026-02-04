export { DH };

class DH {

    /**
     * 
     * @param {*} hope 
     * @param {*} fear 
     * @param {*} eDV DV-modifiers including Advantage rolls.
     * @returns 
     */
    static classify(hope, fear, eDV) {
        if (hope === fear) {
            return 1;
        }

        if (hope + fear >= eDV) {
            return 1;
        }

        return 0;
    }

    static is_critical(h, f) {
        return h === f;
    }

    /**
     * The number of successful cases (to be devided by the total number of cases, which is 144).
     * 
     * @param {Number} eDV 
     * @returns the number of successful cases (to be devided by the total number of cases, which is 144)
     */
    static c_Duality(eDV) {

        if (eDV <= 3) return 144;
        if (eDV >= 24) return 12;

        if (eDV === 4) return 142;
        if (eDV === 5) return 140;
        if (eDV === 6) return 136;
        if (eDV === 7) return 132;
        if (eDV === 8) return 126;
        if (eDV === 9) return 120;
        if (eDV === 10) return 112;
        if (eDV === 11) return 104;
        if (eDV === 12) return 104;
        if (eDV === 13) return 94;
        if (eDV === 14) return 84;
        if (eDV === 15) return 72;
        if (eDV === 16) return 62;
        if (eDV === 17) return 44;
        if (eDV === 18) return 36;
        if (eDV === 19) return 30;
        if (eDV === 20) return 24;
        if (eDV === 21) return 20;
        if (eDV === 22) return 16;
        if (eDV === 23) return 14;

        throw new Error("no or not Number eDV parameter provided");
    }

    static p_Duality(eDV) {
        return this.c_Duality(eDV) / 144;
    }
}
