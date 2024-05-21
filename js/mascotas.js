const listaMascotas = document.getElementById("lista-mascotas");
const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const propietario = document.getElementById("propietario");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const index = document.getElementById("indice");

let mascotas = [
    {   tipo: "Gato",
        nombre: "Manchas",
        propietario: "Esteban"
    },
    {   tipo: "Ave",
        nombre: "Kiko",
        propietario: "Mark"
    }
];

function listarMascotas(){
    const htmlMascotas = mascotas.map((mascota, indice)=>`
    <tr>
    <th scope="row">${indice}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.propietario}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-pencil"></i></button>
            <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>
        </div>
    </td>
  </tr>`).join("");
  listaMascotas.innerHTML = htmlMascotas;
  Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick=editar(index));

}

function enviarDatos(evento){
    evento.preventDefault();
    const accion = btnGuardar.innerHTML;
    const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        propietario: propietario.value
    };
    switch(accion){
        case 'Editar':
            //editar
            mascotas[indice.value] = datos;
            break;
        default:
            //crear
            mascotas.push(datos);
    }
    
    listarMascotas();
    resetModal();
}

function editar(indice){
    return function handler(){
        btnGuardar.innerHTML = 'Editar'
        $('exampleModalCenter').modal('toggle');
        const mascota = mascotas[indice];
        nombre.value = mascota.nombre;
        propietario.value = mascota.propietario;
        tipo.value = mascota.tipo;
        index.value = indice;
    }
}

function resetModal(){
    nombre.value = "Nombre";
    propietario.value = "Propietario";
    tipo.value = "Tipo animal";
    index.value = "";
    btnGuardar.innerHTML = 'Guardar';
}

listarMascotas();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
