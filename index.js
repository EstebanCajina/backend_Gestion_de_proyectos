const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db.config');
const userRoutes = require('./routes/user.route');
const vehicleRoutes = require('./routes/vehicle.route'); 
const maintenanceRoutes = require('./routes/maintenance.route'); 
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

connectDB();
// Configura los archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const corsOptions = {
  origin: 'http://localhost:4000', // Especifica el origen permitido
  credentials: true, // Permite enviar credenciales
};

app.use(cors(corsOptions)); // Permitir solicitudes desde cualquier origen
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/maintenances', maintenanceRoutes); 

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto http://localhost:${port}`);
});