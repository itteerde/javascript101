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

const locationA = new GeoLocation(
    'Kassel, where Erik is,',
    51.313579983106465,
    9.482717835295325
);

const locationB = new GeoLocation(
    'Toronto',
    43.692059362354556,
    -79.4393566843332
);

console.log(`The distance between ${locationA.label} and ${locationB.label} is ${calculateDistance(locationA, locationB).toFixed(2)} km.`);