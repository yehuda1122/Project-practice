const temps = [];

export function addTemperature(temp) {
    let sum = 0
    temps.push(temp);
    temps.forEach(t => sum += t);
    const avg = sum / temps.length;
    console.log(`Average temperature: ${avg}`);
}
