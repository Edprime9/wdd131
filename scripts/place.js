document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

const temperature = 10;
const windSpeed = 5;

document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);
