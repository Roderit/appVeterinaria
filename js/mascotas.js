const listaMascotas = document.getElementById("lista-mascotas");

let mascotas = [
    {   tipo: "Gato",
        nombre: "Manchas",
        propietario: "Esteban"
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
            <button type="button" class="btn btn-info"><i class="fa fa-pencil"></i></button>
            <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>
        </div>
    </td>
  </tr>`).join("");
  listaMascotas.innerHTML = htmlMascotas;
}

listarMascotas();