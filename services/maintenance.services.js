const maintenanceModel = require('../models/maintenance.model');

async function getAllMaintenances() {
  return await maintenanceModel.getAllMaintenances();
}

async function addMaintenance(maintenance) {
  return await maintenanceModel.addMaintenance(maintenance);
}

async function getMaintenanceById(id) {
  return await maintenanceModel.getMaintenanceById(id);
}

async function updateMaintenance(id, maintenance) {
  return await maintenanceModel.updateMaintenance(id, maintenance);
}

async function deleteMaintenance(id) {
  return await maintenanceModel.deleteMaintenance(id);
}

module.exports = { getAllMaintenances, addMaintenance, getMaintenanceById, updateMaintenance, deleteMaintenance };
