const apiUrl = 'http://localhost:3000/paquetes'; // Reemplaza con la URL de tu API

// Función para cargar la grilla de paquetes
function cargarPaquetes() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(paquetes => {
            const filas = paquetes.map(paquete => {
                return `<tr>
                    <td>${paquete.destino}</td>
                    <td>${paquete.duracion}</td>
                    <td>${paquete.precio}</td>
                    <td>${paquete.descripcion}</td>
                    <td><button class="btn btn-danger" onclick="eliminarPaquete(${paquete.id})">Eliminar</button>
                    </td>
                </tr>`;
            });
            document.getElementById('lista-paquetes').innerHTML = filas.join('');
        });
}

// Función para buscar paquetes por descripción
async function buscarPaquetes() {
    try{
    const descripcion = document.getElementById('buscar-input').value;
    const response = await fetch(`${apiUrl}/consulta?d=${descripcion}`);
    const paquetes = await response.json();
    let contenido = document.getElementById('lista-paquetes');
    contenido.innerHTML = '';
    paquetes.forEach(paquete => {
        contenido.innerHTML += `
        <tr>
            <td>${paquete.destino}</td>
            <td>${paquete.duracion}</td>
            <td>${paquete.precio}</td>
            <td>${paquete.descripcion}</td>
            <td>  <button class="btn btn-danger" onclick="eliminarPaquete(${paquete.id})">Eliminar</button>
            </td>`;
    });
    } catch (error) {
    console.error(error);
}};

// Función para agregar un nuevo paquete
function agregarPaquete() {
    try{
    const destino = document.getElementById('destino-input').value;
    const duracion = document.getElementById('duracion-input').value;
    const precio = document.getElementById('precio-input').value;
    const descripcion = document.getElementById('descripcion-input').value;
    const paquete = {
        destino,
        duracion,
        precio,
        descripcion
    };
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(paquete)
    })
        .then(cargarPaquetes())
        .catch(error => console.error(error));

    }catch (error) {
        console.error(error);
    }

}

// Función para eliminar un paquete
function eliminarPaquete(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.text())
        .then(text => {
            alert(text);
            cargarPaquetes();
        });
}

// Cargar la lista de paquetes al cargar la página
cargarPaquetes();