const listaDuenos = document.getElementById("lista-duenos");
const pais = document.getElementById("pais");
const identificacion = document.getElementById("identificacion");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const index = document.getElementById("indice");

let duenos = [
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

function listarDuenos(){
    const htmlDuenos = duenos.map((dueno, indice)=>`
    <tr>
    <th scope="row">${indice}</th>
    <td>${dueno.identificacion}</td>
    <td>${dueno.pais}</td>
    <td>${dueno.nombre}</td>
    <td>${dueno.apellido}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-pencil"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="fa fa-trash"></i></button>
        </div>
    </td>
  </tr>`).join("");
  listaDuenos.innerHTML = htmlDuenos;
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
            duenos[indice.value] = datos;
            break;
        default:
            //crear
            duenos.push(datos);
    }
    
    listarDuenos();
    resetModal();
}

function editar(indice){
    return function handler(){
        btnGuardar.innerHTML = 'Editar'
        $('exampleModalCenter').modal('toggle');
        const dueno = duenos[indice];
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        pais.value = dueno.pais;
        identificacion.value = dueno.identificacion;
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
        duenos = duenos.filter((dueno, indiceDueno)=>indiceDueno !== index);
        listarDuenos();
    }
}

listarDuenos();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
