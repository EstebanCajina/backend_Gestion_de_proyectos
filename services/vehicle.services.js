const vehicleModel = require('../models/vehicle.model'); 

async function getAllVehicles() {
  return await vehicleModel.getAllVehicles();
}

async function addVehicle(vehicle) {
  return await vehicleModel.addVehicle(vehicle);
}

async function getVehicleById(id) {
  return await vehicleModel.getVehicleById(id);
}

async function updateVehicle(id, vehicle) {
  return await vehicleModel.updateVehicle(id, vehicle);
}

async function deleteVehicle(id) {
  return await vehicleModel.deleteVehicle(id);
}

async function checkPlate(plate) {
  return await vehicleModel.checkPlate(plate);
}

module.exports = { getAllVehicles, addVehicle,  getVehicleById, updateVehicle, deleteVehicle, checkPlate };
