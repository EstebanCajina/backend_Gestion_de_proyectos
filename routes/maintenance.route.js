const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenance.controllers');

router.get('/', maintenanceController.getMaintenances); // GET /api/maintenances:id
router.post('/', maintenanceController.addMaintenances);// POST /api/maintenances
router.get('/:id', maintenanceController.getMaintenanceById); // GET /api/maintenances:id
router.put('/:id', maintenanceController.updateMaintenance);// PUT /api/maintenances:id
router.delete('/:id', maintenanceController.deleteMaintenance);// DELETE /api/maintenances:id

module.exports = router;
