/**
 * A point on Earth (roughly, assuming it to be spherical).
 */
class GeoLocation {

    /**
     * Constructs a GeoLocation
     * 
     * @param {String} label Label to display, meant to be the name.
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
    ['Abidjan', new GeoLocation('Abidjan', 5.3600, -4.0083)],
    ['Accra', new GeoLocation('Accra', 5.6037, -0.1870)],
    ['Addis Ababa', new GeoLocation('Addis Ababa', 9.0192, 38.7469)],
    ['Ahmedabad', new GeoLocation('Ahmedabad', 23.0225, 72.5714)],
    ['Alexandria', new GeoLocation('Alexandria', 31.2001, 29.9187)],
    ['Algiers', new GeoLocation('Algiers', 36.7538, 3.0588)],
    ['Almaty', new GeoLocation('Almaty', 43.2220, 76.8512)],
    ['Ankara', new GeoLocation('Ankara', 39.9334, 32.8597)],
    ['Baghdad', new GeoLocation('Baghdad', 33.3152, 44.3661)],
    ['Baku', new GeoLocation('Baku', 40.4093, 49.8671)],
    ['Bangalore', new GeoLocation('Bangalore', 12.9716, 77.5946)],
    ['Bangkok', new GeoLocation('Bangkok', 13.7563, 100.5018)],
    ['Barcelona', new GeoLocation('Barcelona', 41.3851, 2.1734)],
    ['Basra', new GeoLocation('Basra', 30.5081, 47.7835)],
    ['Bejing', new GeoLocation('Bejing (北京市)', 39.91776469937643, 116.40697972550302)],
    ['Belo Horizonte', new GeoLocation('Belo Horizonte', -19.9167, -43.9345)],
    ['Berlin', new GeoLocation('Berlin', 52.5200, 13.4050)],
    ['Bogota', new GeoLocation('Bogota', 4.7110, -74.0721)],
    ['Buenos Aires', new GeoLocation('Buenos Aires', -34.6037, -58.3816)],
    ['Busan', new GeoLocation('Busan', 35.1796, 129.0756)],
    ['Cairo', new GeoLocation('Cairo', 30.0444, 31.2357)],
    ['Caracas', new GeoLocation('Caracas', 10.4806, -66.9036)],
    ['Casablanca', new GeoLocation('Casablanca', 33.5731, -7.5898)],
    ['Chengdu', new GeoLocation('Chengdu', 30.5728, 104.0668)],
    ['Chennai', new GeoLocation('Chennai', 13.0827, 80.2707)],
    ['Chittagong', new GeoLocation('Chittagong', 22.3569, 91.7832)],
    ['Chongqing', new GeoLocation('Chongqing', 29.5630, 106.5516)],
    ['Daegu', new GeoLocation('Daegu', 35.8714, 128.6014)],
    ['Dalian', new GeoLocation('Dalian', 38.9140, 121.6147)],
    ['Dar es Salaam', new GeoLocation('Dar es Salaam', -6.7924, 39.2083)],
    ['Delhi', new GeoLocation('Delhi', 28.6139, 77.2090)],
    ['Dhaka', new GeoLocation('Dhaka', 23.8103, 90.4125)],
    ['Dongguan', new GeoLocation('Dongguan', 23.0210, 113.7518)],
    ['Dubai', new GeoLocation('Dubai', 25.2048, 55.2708)],
    ['Foshan', new GeoLocation('Foshan', 23.0215, 113.1214)],
    ['Fukuoka', new GeoLocation('Fukuoka', 33.5904, 130.4017)],
    ['Guadalajara', new GeoLocation('Guadalajara', 20.6597, -103.3496)],
    ['Guangzhou', new GeoLocation('Guangzhou', 23.1291, 113.2644)],
    ['Harbin', new GeoLocation('Harbin', 45.8038, 126.5350)],
    ['Havana', new GeoLocation('Havana', 23.1136, -82.3666)],
    ['Hangzhou', new GeoLocation('Hangzhou', 30.2741, 120.1551)],
    ['Ho Chi Minh City', new GeoLocation('Ho Chi Minh City', 10.8231, 106.6297)],
    ['Hong Kong', new GeoLocation('Hong Kong', 22.3193, 114.1694)],
    ['Hyderabad', new GeoLocation('Hyderabad', 17.3850, 78.4867)],
    ['Incheon', new GeoLocation('Incheon', 37.4563, 126.7052)],
    ['Istanbul', new GeoLocation('Istanbul', 41.0082, 28.9784)],
    ['Izmir', new GeoLocation('Izmir', 38.4237, 27.1428)],
    ['Jakarta', new GeoLocation('Jakarta', -6.2088, 106.8456)],
    ['Jeddah', new GeoLocation('Jeddah', 21.4858, 39.1925)],
    ['Johannesburg', new GeoLocation('Johannesburg', -26.2041, 28.0473)],
    ['Kabul', new GeoLocation('Kabul', 34.5553, 69.2075)],
    ['Kano', new GeoLocation('Kano', 12.0022, 8.5920)],
    ['Karachi', new GeoLocation('Karachi', 24.8607, 67.0011)],
    ['Kassel', new GeoLocation('Kassel', 51.313579983106465, 9.482717835295325)],
    ['Khartoum', new GeoLocation('Khartoum', 15.5007, 32.5599)],
    ['Kiev', new GeoLocation('Kiev', 50.4501, 30.5234)],
    ['Kinshasa', new GeoLocation('Kinshasa', -4.4419, 15.2663)],
    ['Kolkata', new GeoLocation('Kolkata', 22.5726, 88.3639)],
    ['Kuala Lumpur', new GeoLocation('Kuala Lumpur', 3.1390, 101.6869)],
    ['Lagos', new GeoLocation('Lagos', 6.5244, 3.3792)],
    ['Lahore', new GeoLocation('Lahore', 31.5204, 74.3587)],
    ['Lima', new GeoLocation('Lima', -12.0464, -77.0428)],
    ['London', new GeoLocation('London', 51.5074, -0.1278)],
    ['Luanda', new GeoLocation('Luanda', -8.8390, 13.2894)],
    ['Madrid', new GeoLocation('Madrid', 40.4168, -3.7038)],
    ['Manila', new GeoLocation('Manila', 14.5995, 120.9842)],
    ['Medellin', new GeoLocation('Medellin', 6.2442, -75.5812)],
    ['Mexico City', new GeoLocation('Mexico City', 19.4326, -99.1332)],
    ['Montreal', new GeoLocation('Montreal', 45.5017, -73.5673)],
    ['Mumbai', new GeoLocation('Mumbai', 19.0760, 72.8777)],
    ['Nagoya', new GeoLocation('Nagoya', 35.1815, 136.9066)],
    ['Nairobi', new GeoLocation('Nairobi', -1.2921, 36.8219)],
    ['Nanjing', new GeoLocation('Nanjing', 32.0603, 118.7969)],
    ['New York', new GeoLocation('New York', 40.7128, -74.0060)],
    ['Osaka', new GeoLocation('Osaka', 34.6937, 135.5023)],
    ['Paris', new GeoLocation('Paris', 48.8566, 2.3522)],
    ['Pune', new GeoLocation('Pune', 18.5204, 73.8567)],
    ['Pyongyang', new GeoLocation('Pyongyang', 39.0392, 125.7625)],
    ['Rio de Janeiro', new GeoLocation('Rio de Janeiro', -22.9068, -43.1729)],
    ['Riyadh', new GeoLocation('Riyadh', 24.7136, 46.6753)],
    ['Rome', new GeoLocation('Rome', 41.9028, 12.4964)],
    ['Sanaa', new GeoLocation('Sana\'a', 15.3694, 44.1910)],
    ['Santiago', new GeoLocation('Santiago', -33.4489, -70.6693)],
    ['Sao Paulo', new GeoLocation('Sao Paulo', -23.5505, -46.6333)],
    ['Sapporo', new GeoLocation('Sapporo', 43.0611, 141.3544)],
    ['Seoul', new GeoLocation('Seoul', 37.5665, 126.9780)],
    ['Shanghai', new GeoLocation('Shanghai', 31.2304, 121.4737)],
    ['Shenyang', new GeoLocation('Shenyang', 41.8057, 123.4315)],
    ['Shenzhen', new GeoLocation('Shenzhen', 22.5431, 114.0579)],
    ['Surat', new GeoLocation('Surat', 21.1702, 72.8311)],
    ['Suzhou', new GeoLocation('Suzhou', 31.2990, 120.5853)],
    ['Taipei', new GeoLocation('Taipei', 25.0330, 121.5654)],
    ['Tashkent', new GeoLocation('Tashkent', 41.2995, 69.2401)],
    ['Tehran', new GeoLocation('Tehran', 35.6892, 51.3890)],
    ['Tianjin', new GeoLocation('Tianjin', 39.0842, 117.2010)],
    ['Tokyo', new GeoLocation('Tokyo', 35.6895, 139.6917)],
    ['Toronto', new GeoLocation('Toronto', 43.6532, -79.3832)],
    ['Wuhan', new GeoLocation('Wuhan', 30.5928, 114.3055)],
    ['Xian', new GeoLocation('Xian', 34.3416, 108.9398)],
    ['Yangon', new GeoLocation('Yangon', 16.8661, 96.1951)],
]);

let locationA = library.get('Kassel');
let locationB = library.get('Toronto');

console.log(`The distance between ${locationA.label} and ${locationB.label} is ${calculateDistance(locationA, locationB).toFixed(2)} km. Initial direction (for long distance don't forget to recalculate on the move, you are travelling a curve): ${calculateBearing(locationA, locationB).toFixed(1)}°`);

console.log(`The distance between ${library.get('Toronto').label} and ${library.get('Bejing').label} is ${calculateDistance(library.get('Toronto'), library.get('Bejing')).toFixed(2)} km. Initial direction (for long distance don't forget to recalculate on the move, you are travelling a curve): ${calculateBearing(library.get('Toronto'), library.get('Bejing')).toFixed(1)}°`);
console.log(`The distance between ${library.get('Bejing').label} and ${library.get('Toronto').label} is ${calculateDistance(library.get('Bejing'), library.get('Toronto')).toFixed(2)} km. Initial direction (for long distance don't forget to recalculate on the move, you are travelling a curve): ${calculateBearing(library.get('Bejing'), library.get('Toronto')).toFixed(1)}°`);

locationA = library.get('Toronto');
locationB = library.get('Montreal');

console.log(`The distance between ${locationA.label} and ${locationB.label} is ${calculateDistance(locationA, locationB).toFixed(2)} km. Initial direction (for long distance don't forget to recalculate on the move, you are travelling a curve): ${calculateBearing(locationA, locationB).toFixed(1)}°`);
