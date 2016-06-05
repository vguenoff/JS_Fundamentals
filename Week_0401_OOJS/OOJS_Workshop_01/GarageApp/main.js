/* global Garage */
let bpGarage = new Garage('BPSF', 20, 'Car');

console.log(bpGarage);
console.log(bpGarage.vehiclesCount);
bpGarage.addVehicle('vw');
console.log(bpGarage.vehiclesList);
console.log(bpGarage.vehiclesCount);
bpGarage.removeVehicle('vw');
console.log(bpGarage.vehiclesList);
console.log(bpGarage.vehiclesCount);
