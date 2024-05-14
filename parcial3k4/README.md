# Primer Parcial Desarrollo de Software

## Objetivo
El objetivo de este proyecto parcial es que los estudiantes demuestren su capacidad para integrar y completar código en una aplicación web que utiliza tecnologías de frontend y backend. La aplicación mostrará una lista de eventos de tecnología próximos.

## Descripción del Proyecto
Los estudiantes recibirán un código base para una aplicación web que incluye componentes de frontend y backend. Deberán completar ciertas funciones para que la aplicación funcione correctamente. El frontend debe usar HTML y JavaScript para mostrar una lista de eventos de tecnología. El backend, desarrollado con Node.js, servirá estos eventos desde una base de datos en memoria SQLite gestionada por Sequelize.

### Requisitos del Backend
- Completar la implementación de la ruta `GET` en el backend para recuperar eventos desde la base de datos SQLite utilizando Sequelize.

### Requisitos del Frontend
- Completar la función `cargarEventos` en JavaScript para obtener los eventos desde el backend usando la API Fetch y renderizarlos dinámicamente en la página web.

## Instrucciones
1. **Configuración del Backend:**
   - Se proporcionará el código base para la aplicación Node.js.
   - Los estudiantes deben completar la implementación de la ruta `app.get('/eventos', async (req, res) => {...})` para que devuelva los eventos desde la base de datos.

2. **Configuración del Frontend:**
   - Se proporcionará un archivo HTML básico y el código JavaScript inicial.
   - Los estudiantes deben completar la función `cargarEventos` en el código JavaScript para realizar una solicitud fetch al backend, procesar la respuesta y mostrar los eventos dinámicamente en la página HTML.

3. **Pruebas:**
   - Verificar que la función `cargarEventos` obtiene y muestra correctamente los eventos del backend.
   - Asegurarse de que la ruta del backend devuelve los datos correctos y maneja posibles errores.

4. **Entrega:**
   - Los estudiantes deben subir su código completo a la plataforma designada antes de la fecha límite.
   - Asegurarse de que el código está bien organizado y comentado adecuadamente.

## Criterios de Evaluación


Para aprobar el parcial, el Webservice con API REST debe funcionar correctamente y la grilla debe mostrarse en el frontend.

### Puntuación:

**Funcionalidad** (8 puntos):

#### Backend (4 puntos):


**3 puntos:** La ruta GET /eventos está implementada correctamente y devuelve los eventos de la base de datos SQLite utilizando Sequelize. La respuesta del backend tiene el formato correcto (JSON).

**1 punto:** Manejo adecuado de errores en la ruta del backend.

#### Frontend (4 puntos):**


**3 puntos**: La función cargarEventos realiza la solicitud fetch al backend, procesa la respuesta y muestra los datos dinámicamente en la página HTML.

**1 punto**: Enlazar al evento de carga de formulario para que muestre automaticamente cuando carga el formulario.

**Cláusula de Funcionamiento Integra**l (indispensable realizar el frontend y backend para poder evaluar la calidad de código y el diseño)

#### Calidad del Código (1 puntos):


**0.5 punto**: El código está bien organizado, indentado correctamente y sigue las convenciones de estilo de codificación.

**0.5 punto**: El código está documentado de manera clara y concisa, explicando la lógica y las decisiones de diseño.

#### Diseño (1 punto):


**1 punto:** El frontend presenta los datos de manera organizada con Bootstrap, tiene diseño responsive y facilita la lectura de la información.

¡Buena suerte y feliz codificación!
