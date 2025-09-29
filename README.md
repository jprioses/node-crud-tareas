📌 CRUD de Tareas – Node.js + Express

API REST que permite crear, leer, actualizar y eliminar tareas.

🚀 Tecnologías

Node.js + Express

SQLite3 con Sequelize

Arquitectura MVC con capa de servicio entre modelo y controlador

🛠️ Características principales

Endpoints:

POST /tasks – Crear tarea

GET /tasks – Listar tareas con paginación (?page y ?limit)

GET /tasks/:id – Obtener tarea por ID

PUT /tasks/:id – Actualizar tarea por ID

DELETE /tasks/:id – Eliminar tarea por ID

Campos: { id, title, done } donde done es boolean.

Validaciones:

title: requerido, string de 3–100 caracteres.

done: booleano.

Middleware de manejo de errores: respuestas JSON consistentes para 400, 404 y 500.

Utilidades:

catchAsync para promesas.

Clases de error personalizadas (cliente/servidor).

Respuestas y validaciones centralizadas.

📂 Estructura del proyecto
src/
├─ data/
├─ controllers/
├─ models/
├─ services/
├─ routes/
├─ middlewares/
└─ utils/


models: Definición de la tabla Task (Sequelize/SQLite).

services: Lógica entre el controlador y el modelo.

controllers: Respuestas HTTP y validaciones.

middlewares: Manejo de errores y validaciones.

utils: catchAsync, manejo de errores y helpers.

▶️ Instalación y ejecución
# Clonar repositorio
git clone https://github.com/jprioses/node-crud-tareas

cd node-crud-tareas

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm start


Nota: La base de datos SQLite se crea automáticamente si no existe.

🧩 Scripts disponibles

dev – Inicia el servidor en modo desarrollo con nodemon.

start – Inicia en producción.

test – (Pendiente de implementación básica).

📝 Ejemplos de uso
Crear tarea

POST /tasks

{
  "title": "Comprar leche",
  "done": false
}

Listar tareas paginadas

GET /tasks?page=1&limit=10

✅ Estado del proyecto

Todas las funcionalidades solicitadas implementadas y testeadas manualmente con Postman.

Falta agregar el comando npm test con al menos un test básico.

📄 Licencia

MIT
