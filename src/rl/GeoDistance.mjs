/**
 * A point on Earth (roughly, assuming it to be spherical).
 */
class GeoLocation {

    /**
     * Constructs a GeoLocation
     * 
     * @param {String} label 
     * @param {Number} latitude as for example provided by Google Maps
     * @param {Number} longitude as for example provided by Google Maps
     */
    constructor(label, latitude, longitude) {
        this.label = label;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

/**
 * Calculates the approximate (Earth as a sphere) distance between two GeoLocations on Earth. Note that the radius of Earth is just a scalar scaling the result of the geometrical calulation, so rewriting a function for all planets (they are by definition all spheroids pretty close to true spherical bodies [rotation during formation, then some crust dynamics makes them not quite that]) would be simply adding the ... well done, adding an optional parameter defaulting to Earth.
 * 
 * @param {GeoLocation} locationA one GeoLocation
 * @param {GeoLocation} locationB the other GeoLocation
 * @param {Number} radius The radius of the spheroid body, like a planet, defaulting to Earth's medium radius.
 * @returns distance between locationA and locationB in km.
 */
function calculateDistance(locationA, locationB, radius = 6371) {

    // Convert degrees to radians
    const dLat = (locationB.latitude - locationA.latitude) * Math.PI / 180;
    const dLon = (locationB.longitude - locationA.longitude) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(locationA.latitude * Math.PI / 180) * Math.cos(locationB.latitude * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return radius * c;
}

/**
 * Calculates the initial bearing from start point to end point.
 * 
 * @param {GeoLocation} locationA 
 * @param {GeoLocation} locationB 
 * @returns the initial direction in degrees. Remember that this is only valid for the point on the sphere. If used to travel it has to be calculated again on the move (for almost all paths, that is except if the path is exactly on a longitude, or latitude, and does not go over a pole).
 */
function calculateBearing(locationA, locationB) {
    // 1. Convert degrees to radians
    const toRadians = deg => (deg * Math.PI) / 180;
    const toDegrees = rad => (rad * 180) / Math.PI;

    const φ1 = toRadians(locationA.latitude);
    const φ2 = toRadians(locationB.latitude);
    const λ1 = toRadians(locationA.longitude);
    const λ2 = toRadians(locationB.longitude);

    const Δλ = λ2 - λ1;

    // 2. Calculate the components of the bearing formula
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) -
        Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);

    // 3. Calculate initial bearing
    let bearing = toDegrees(Math.atan2(y, x));

    // 4. Normalize to 0-360 degrees
    return (bearing + 360) % 360;
}

let library = new Map([
    ['Kassel', new GeoLocation('Kassel', 51.313579983106465, 9.482717835295325)],
    ['Toronto', new GeoLocation('Toronto', 43.692059362354556, -79.4393566843332)],
    ['Bejing', new GeoLocation('Bejing (北京市)', 39.91776469937643, 116.40697972550302)]
]);

const locationA = library.get('Kassel');
const locationB = library.get('Toronto');

console.log(`The distance between ${locationA.label} and ${locationB.label} is ${calculateDistance(locationA, locationB).toFixed(2)} km. Initial direction (for long distance don't forget to recalculate on the move, you are travelling a curve): ${calculateBearing(locationA, locationB).toFixed(1)}°`);

console.log(`The distance between ${library.get('Toronto').label} and ${library.get('Bejing').label} is ${calculateDistance(library.get('Toronto'), library.get('Bejing')).toFixed(2)} km. Initial direction (for long distance don't forget to recalculate on the move, you are travelling a curve): ${calculateBearing(library.get('Toronto'), library.get('Bejing')).toFixed(1)}°`);
console.log(`The distance between ${library.get('Bejing').label} and ${library.get('Toronto').label} is ${calculateDistance(library.get('Bejing'), library.get('Toronto')).toFixed(2)} km. Initial direction (for long distance don't forget to recalculate on the move, you are travelling a curve): ${calculateBearing(library.get('Bejing'), library.get('Toronto')).toFixed(1)}°`);