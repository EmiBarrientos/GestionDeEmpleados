
📋 Employee Management

Full-stack web application for employee management, developed with React on the frontend and Node.js with Express on the backend. Allows CRUD (Create, Read, Update, Delete) operations on a MySQL database.

🛠 Technologies Used

Frontend: React, Axios, Bootstrap, SweetAlert2
Backend: Node.js, Express, MySQL
Others: Git, GitHub

🚀 Installation and Running

Clone the repository:

git clone https://github.com/EmiBarrientos/GestionDeEmpleados.git
cd GestionDeEmpleados


Set up the server (backend)

Navigate to the server folder:

cd server


Install dependencies:

npm install


Configure the MySQL database:

Create a database called gestion_empleados.

Import the SQL schema from the server/database.sql file.

Update the connection credentials in server/db.js.

Run the server:

npm start


The server will be available at http://localhost:3001
.

Set up the client (frontend)

Navigate to the client folder:

cd client


Install dependencies:

npm install


Run the client:

npm start


The application will be available at http://localhost:3000
.

📂 Project Structure

GestionDeEmpleados/
├── client/             # Frontend in React
│   ├── src/
│   ├── public/
│   └── package.json
├── server/             # Backend in Node.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   ├── database.sql
│   └── server.js
├── .gitignore
└── README.md


🎯 Features

Frontend:

Form to add, edit, and delete employees.

Table to view the list of employees.

Data validation with SweetAlert2.

Backend:

RESTful API with CRUD routes.

MySQL database connection.

Error handling and proper HTTP responses.

📸 Screenshots

Home screen

Employee form

🛠 Contributions

Contributions are welcome. Please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/new-feature).

Make your changes and commit (git commit -am 'Add new feature').

Push to your branch (git push origin feature/new-feature).

Open a Pull Request.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📋 Gestión de Empleados

Aplicación web full-stack para la gestión de empleados, desarrollada con React en el frontend y Node.js con Express en el backend. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos MySQL.

🛠 Tecnologías utilizadas

Frontend: React, Axios, Bootstrap, SweetAlert2

Backend: Node.js, Express, MySQL

Otros: Git, GitHub

🚀 Instalación y ejecución
1. Clonar el repositorio
git clone https://github.com/EmiBarrientos/GestionDeEmpleados.git
cd GestionDeEmpleados

2. Configurar el servidor (backend)

Navegar a la carpeta server:

cd server


Instalar dependencias:

npm install


Configurar la base de datos MySQL:

Crear una base de datos llamada gestion_empleados.

Importar el esquema SQL desde el archivo server/database.sql.

Actualizar las credenciales de conexión en server/db.js.

Ejecutar el servidor:

npm start


El servidor estará disponible en http://localhost:3001.

3. Configurar el cliente (frontend)

Navegar a la carpeta client:

cd client


Instalar dependencias:

npm install


Ejecutar el cliente:

npm start


La aplicación estará disponible en http://localhost:3000.

📂 Estructura del proyecto
GestionDeEmpleados/
├── client/             # Frontend en React
│   ├── src/
│   ├── public/
│   └── package.json
├── server/             # Backend en Node.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   ├── database.sql
│   └── server.js
├── .gitignore
└── README.md

🎯 Funcionalidades

Frontend:

Formulario para agregar, editar y eliminar empleados.

Tabla para visualizar la lista de empleados.

Validación de datos con SweetAlert2.

Backend:

API RESTful con rutas para operaciones CRUD.

Conexión a base de datos MySQL.

Manejo de errores y respuestas HTTP adecuadas.

📸 Capturas de pantalla
Pantalla de inicio

Formulario de empleados

🛠 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').

Haz push a tu rama (git push origin feature/nueva-funcionalidad).

Abre un Pull Request.
