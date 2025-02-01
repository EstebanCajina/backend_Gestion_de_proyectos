# 🚗 Taller Mecánico - Backend 🛠️

¡Bienvenido al repositorio del backend para el sistema de gestión de talleres mecánicos! Este proyecto es parte del curso **"Gestión de Proyectos"** y está desarrollado en **Node.js**. Aquí encontrarás toda la información necesaria para configurar, ejecutar y contribuir al proyecto.

---

## 📋 Descripción del Proyecto

Este backend está diseñado para gestionar las operaciones de un taller mecánico, incluyendo la administración de clientes, vehículos, citas, reparaciones y más. El sistema permite:

- 🚘 Registrar y gestionar vehículos.
- 👥 Administrar clientes y sus historiales.
- 📅 Programar y gestionar citas.
- 🔧 Registrar reparaciones y mantenimientos.
- 📊 Generar reportes y estadísticas.

El objetivo es proporcionar una solución robusta y escalable para la gestión eficiente de un taller mecánico.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para construir APIs RESTful.
- **SQL Express**: Base de datos SQL para almacenar la información de manera estructurada y eficiente.
- **Azure Data Studio**: Herramienta para gestionar y consultar la base de datos SQL de manera visual y eficaz.
- **JWT (JSON Web Tokens)**: Autenticación basada en tokens para asegurar las rutas y endpoints.
- **Bcrypt**: Encriptación de contraseñas para garantizar la seguridad de los datos de los usuarios.
- **Dotenv**: Manejo de variables de entorno para configuraciones sensibles y específicas del entorno.
- **Jest**: Framework de pruebas para garantizar la calidad del código y la funcionalidad del backend.

---

## 🚀 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 📥 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://git.ucr.ac.cr/grupo_1_gestion_2025/Backend.git

   
Navega al directorio del proyecto:

bash
Copy
cd Backend
Instala las dependencias:

bash
Copy
npm install
Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

env
Copy
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario_sql
DB_PASSWORD=tu_contraseña_sql
DB_NAME=taller_mecanico
JWT_SECRET=tu_clave_secreta
Configura la base de datos:

Asegúrate de tener SQL Express instalado y en ejecución.

Usa Azure Data Studio para crear la base de datos y las tablas necesarias.

Ejecuta los scripts SQL proporcionados en la carpeta database/ para crear la estructura inicial.

Inicia el servidor:

bash
Copy
npm start
O, si prefieres usar Nodemon para desarrollo:

bash
Copy
npm run dev
📂 Estructura del Proyecto
Copy
Backend/
├── src/
│   ├── controllers/       # Controladores para manejar las rutas
│   ├── models/            # Modelos de la base de datos SQL
│   ├── routes/            # Definición de las rutas de la API
│   ├── middlewares/       # Middlewares para autenticación y validación
│   ├── utils/             # Utilidades y helpers
│   ├── database/          # Scripts SQL para la base de datos
│   └── app.js             # Configuración de Express
├── tests/                 # Pruebas unitarias y de integración con Jest
├── .env                   # Variables de entorno
├── .gitignore             # Archivos y carpetas ignorados por Git
├── package.json           # Dependencias y scripts
└── README.md              # Este archivo
🌐 Endpoints de la API
Aquí tienes una lista de los principales endpoints disponibles:

Clientes:

GET /api/clientes - Obtener todos los clientes.

POST /api/clientes - Crear un nuevo cliente.

GET /api/clientes/:id - Obtener un cliente por ID.

PUT /api/clientes/:id - Actualizar un cliente.

DELETE /api/clientes/:id - Eliminar un cliente.

Vehículos:

GET /api/vehiculos - Obtener todos los vehículos.

POST /api/vehiculos - Registrar un nuevo vehículo.

GET /api/vehiculos/:id - Obtener un vehículo por ID.

PUT /api/vehiculos/:id - Actualizar un vehículo.

DELETE /api/vehiculos/:id - Eliminar un vehículo.

Citas:

GET /api/citas - Obtener todas las citas.

POST /api/citas - Programar una nueva cita.

GET /api/citas/:id - Obtener una cita por ID.

PUT /api/citas/:id - Actualizar una cita.

DELETE /api/citas/:id - Eliminar una cita.

🧪 Pruebas
El proyecto utiliza Jest para realizar pruebas unitarias y de integración. Para ejecutar las pruebas, sigue estos pasos:

Asegúrate de que todas las dependencias estén instaladas.

Ejecuta el siguiente comando:

bash
Copy
npm test
Esto ejecutará todas las pruebas definidas en la carpeta tests/.

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').

Haz push a la rama (git push origin feature/nueva-funcionalidad).

Abre un Pull Request y describe tus cambios.

📜 Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

🙏 Agradecimientos
Profesor y compañeros del curso: Por su apoyo y colaboración en el desarrollo de este proyecto.

Node.js y SQL Express: Por proporcionar las herramientas necesarias para construir este backend.

📌 Estado del Proyecto
El proyecto está en desarrollo activo. Si tienes alguna sugerencia o encuentras algún problema, no dudes en abrir un issue en el repositorio.

¡Gracias por visitar nuestro proyecto! 🚀
