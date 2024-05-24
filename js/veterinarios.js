const listaVeterinarios = document.getElementById("lista-veterinarios");
const pais = document.getElementById("pais");
const identificacion = document.getElementById("identificacion");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const index = document.getElementById("indice");

let veterinarios = [
    {   pais: "Bolivia",
        identificacion: "4-758-499",
        nombre: "Juan",
        apellido: "Orozco"
    },
    {   pais: "Colombia",
        identificacion: "9-2564-28",
        nombre: "Carlos",
        apellido: "Jaramillo"
    }
];

function listarVeterinarios(){
    const htmlVeterinarios = veterinarios.map((veterinario, indice)=>`
    <tr>
    <th scope="row">${indice}</th>
    <td>${veterinario.identificacion}</td>
    <td>${veterinario.pais}</td>
    <td>${veterinario.nombre}</td>
    <td>${veterinario.apellido}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-pencil"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="fa fa-trash"></i></button>
        </div>
    </td>
  </tr>`).join("");
  listaVeterinarios.innerHTML = htmlVeterinarios;
  Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick=editar(index));
  Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick=eliminar(index));

}

function enviarDatos(evento){
    evento.preventDefault();
    const accion = btnGuardar.innerHTML;
    const datos = {
        pais: pais.value,
        identificacion: identificacion.value,
        nombre: nombre.value,
        apellido: apellido.value
    };
    switch(accion){
        case 'Editar':
            //editar
            veterinarios[indice.value] = datos;
            break;
        default:
            //crear
            veterinarios.push(datos);
    }
    
    listarVeterinarios();
    resetModal();
}

function editar(indice){
    return function handler(){
        btnGuardar.innerHTML = 'Editar'
        $('exampleModalCenter').modal('toggle');
        const veterinario = veterinarios[indice];
        nombre.value = veterinario.nombre;
        apellido.value = veterinario.apellido;
        pais.value = veterinario.pais;
        identificacion.value = veterinario.identificacion;
        index.value = indice;
    }
}

function resetModal(){
    nombre.value = "";
    apellido.value = "";
    identificacion.value = "";
    pais.value = "";
    index.value = "";
    btnGuardar.innerHTML = 'Guardar';
}

function eliminar(index){
    return function clickEliminar(){
        veterinarios = veterinarios.filter((veterinario, indiceVeterinario)=>indiceVeterinario !== index);
        listarVeterinarios();
    }
}

listarVeterinarios();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
