const cargarEventos = async () => {
  try
    {const response = await fetch('http://localhost:3000/eventos');
    const eventos = await response.json();
    let contenido = document.getElementById('grilla-eventos');
    contenido.innerHTML = '';
    eventos.forEach(evento => {
      contenido.innerHTML += `
        <tr>
          <td>${evento.nombre}</td>
          <td>${evento.descripcion}</td>
          <td>${evento.ubicacion}</td>
          <td>${evento.fechaInicio}</td>
          <td>${evento.fechaFin}</td>
          <td>${evento.tipoAsistencia}</td>
          <td>${evento.enlace}</td>
          <td><button class="btn btn-danger" onclick="eliminarEvento(${evento.id})">Eliminar</button></td>`
      });
    }
  catch (error) { console.error(error); };
}


async function filtrar() {
  try {
    const nombre = document.getElementById('input-nombre').value;
    const response = await fetch(`http://localhost:3000/eventos/${nombre}`);
    const evento = await response.json();
    let contenido = document.getElementById('grilla-eventos');
    contenido.innerHTML = '';
    contenido.innerHTML += `
        <tr>
          <td>${evento.nombre}</td>
          <td>${evento.descripcion}</td>
          <td>${evento.ubicacion}</td>
          <td>${evento.fechaInicio}</td>
          <td>${evento.fechaFin}</td>
          <td>${evento.tipoAsistencia}</td>
          <td>${evento.enlace}</td>
          <td><button class="btn btn-danger" onclick="eliminarEvento(${evento.id})">Eliminar</button></td>`

  }catch (error) { console.error(error);
};
};


async function eliminarEvento(id) {
  try {
    const response = await fetch(`http://localhost:3000/eventos/${id}`,{
      method: 'DELETE'
    });
    const data = await response.text();
    console.log(data);
    cargarEventos();
  } catch (error) { console.error(error); };
}

async function agregarEvento() {
  try {
    const nombre = document.getElementById('nombre-input').value;
    const descripcion = document.getElementById('descripcion-input').value;
    const ubicacion = document.getElementById('ubicacion-input').value;
    const fechaInicio = document.getElementById('fechaInicio-input').value;
    const fechaFin = document.getElementById('fechaFin-input').value;
    const tipoAsistencia = document.getElementById('tipoAsistencia-input').value;
    const enlace = document.getElementById('enlace-input').value;
    const evento = {
      nombre,
      descripcion,
      ubicacion,
      fechaInicio,
      fechaFin,
      tipoAsistencia,
      enlace
    };
    const response = await fetch('http://localhost:3000/eventos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(evento)
    });
    const data = await response.text();
    console.log(data);
    cargarEventos();
  } catch (error) { console.error(error); };
}
cargarEventos();
