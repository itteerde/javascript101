/**
 * Calculates sunrise, sunset, and daylight duration.
 * @param {Object} location - {latitude: Number, longitude: Number}
 * @param {Date} date - The date to calculate for
 * @param {Number} timezone - The UTC offset of the location (e.g., -5 for EST)
 * @param {Boolean} localized - If true, returns times in the location's local time. 
 * If false, returns times in the user's system time.
 */
function sunData(location, date, timezone, localized = true) {
    const lat = location.latitude;
    const lng = location.longitude;

    // Helper: Convert Date to Julian Day
    const getJD = (date) => (date.getTime() / 86400000) - (date.getTimezoneOffset() / 1440) + 2440587.5;

    const jd = getJD(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0));

    // Constants for the Sunrise Equation
    const n = Math.floor(jd - 2451545.0 + 0.0008);
    const jStar = n - lng / 360;
    const M = (357.5291 + 0.98560028 * jStar) % 360;
    const C = 1.9148 * Math.sin(M * Math.PI / 180) + 0.02 * Math.sin(2 * M * Math.PI / 180) + 0.0003 * Math.sin(3 * M * Math.PI / 180);
    const lambda = (M + C + 180 + 102.9372) % 360;
    const jTransit = 2451545.0 + jStar + 0.0053 * Math.sin(M * Math.PI / 180) - 0.0069 * Math.sin(2 * lambda * Math.PI / 180);
    const delta = Math.asin(Math.sin(lambda * Math.PI / 180) * Math.sin(23.44 * Math.PI / 180)) * 180 / Math.PI;

    // Hour Angle (H)
    const cosH = (Math.sin(-0.833 * Math.PI / 180) - Math.sin(lat * Math.PI / 180) * Math.sin(delta * Math.PI / 180)) / (Math.cos(lat * Math.PI / 180) * Math.cos(delta * Math.PI / 180));

    if (cosH > 1) return { error: "Polar Night" };
    if (cosH < -1) return { error: "Midnight Sun" };

    const H = Math.acos(cosH) * 180 / Math.PI;
    const jRise = jTransit - H / 360;
    const jSet = jTransit + H / 360;

    // Convert Julian to Date objects
    const fromJulian = (j) => new Date((j - 2440587.5) * 86400000);
    let sunrise = fromJulian(jRise);
    let sunset = fromJulian(jSet);

    // Format Duration
    const diffMs = sunset - sunrise;
    const diffHrs = Math.floor(diffMs / 3600000);
    const diffMins = Math.floor((diffMs % 3600000) / 60000);
    const durationDaylight = `${String(diffHrs).padStart(2, '0')}:${String(diffMins).padStart(2, '0')}`;

    // Localization Logic
    const formatTime = (dateObj) => {
        if (localized) {
            // Shift to target timezone and return as a string
            const utc = dateObj.getTime() + (dateObj.getTimezoneOffset() * 60000);
            const localizedDate = new Date(utc + (3600000 * timezone));
            return localizedDate.toUTCString().replace("GMT", `UTC${timezone >= 0 ? '+' : ''}${timezone}`);
        }
        return dateObj.toUTCString();
    };

    return {
        sunrise: formatTime(sunrise),
        sunset: formatTime(sunset),
        durationDaylight
    };
}

/**
 * Remember to adjust for Daylight Saving time (as long as that BS exists). There is no realistic way of automating this, as one would not only need a database of all the countries (and for several countries further distinctions), but also would have to have a precise world map to get from GeoLocation to country, timezone, daylight savings. So just provide the parameter. For a GUI however, one might chose to have two controls, one for the normal timezone offset, one if daylight saving currently needs to modify that (I do think all zones still doing daylight saving are the same one hour the same direction). Date.getTimezoneOffset() gets the offset for a specific Date, should one consider any semi-automation.
 */
let location = { name: 'Chicago', latitude: 41.893475004631455, longitude: -87.63004717247628, timezoneOffset: -5 };

console.log(sunData(location, new Date("2026-02-25"), location.timezoneOffset, true));