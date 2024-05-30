console.log("Bien");
const listavisita = {};
var visita;

function submitForm(event){
    event.preventDefault();


    const visitDate = document.getElementById('visit-date').value;
    const visitTime = document.getElementById('hora').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const infants = document.getElementById('infants').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const additionalRequests = document.getElementById('additional-requests').value;
    
    const visita = {visitDate,visitTime,adults, children,infants,firstName,lastName,email,phone,additionalRequests};
    let listavisita = JSON.parse(localStorage.getItem('listavisita')) || [];

    function loadTable(){
        // Obtener el array de datos del localStorage
        const data = JSON.parse(localStorage.getItem('listavisita')) || [];

    listavisita.push(visita);

    mostrar();
}

// Obtener el cuerpo de la tabla
const table = document.getElementById('data-tabla-body');
// Limpiar la tabla antes de cargar los datos
table.innerHTML = "";

// Recorrer el array de datos y crear filas en la tabla
data.forEach((item, index) => {

    const row = document.createElement('tr');

    // Crear una imagen y establecer su atributo src con la URL de la imagen
    const img = document.createElement('img');
    img.src = item.cImagen;
    img.alt = 'Imagen';
    img.style.maxWidth = '100px';
    img.style.maxHeight = '100px';

    row.innerHTML = `
    <td></td>
    <td>${item.visitDate}</td>
    <td>${item.visitTime}</td>
    <td>${item.adults}</td>
    <td>${item.children}</td>
    <td>${item.infants}</td>
    <td>${item.firstName}</td>
    <td>${item.lastName}</td>
    <td>${item.email}</td>
    <td>${item.phone}</td>
    <td>${item.additionalRequests}</td>
    <td>
        <button onclick="editRow(${index})">Editar</button>
        <button onclick="deleteRow(${index})">Eliminar</button>
    </td>
    `;

    // Agregar la imagen a la segunda celda de la fila
    row.cells[0].appendChild(img);

    // Agregar la fila a la tabla
    table.appendChild(row);
    });

}

// Función para eliminar una fila
function deleteRow(index) {
    let listavisita = JSON.parse(localStorage.getItem('listavisita')) || [];
    listavisita.splice(index, 1);
    localStorage.setItem('listavisita', JSON.stringify(listavisita));
    loadTable();
}

// Función para editar una fila (aún no implementada)
function editRow(index) {
    alert('Editar funcionalidad aún no implementada.');
}

// Cargar la tabla cuando la página se cargue
window.onload = loadTable;


function validateVisitForm() {
    var visitDate = document.getElementById("visit-date").value;
    var visitTime = document.getElementById("hora").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var infants = document.getElementById("infants").value;
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dateError = document.getElementById("date-error");

    // Limpiar mensajes de error
    dateError.textContent = "";

    // Validar que ningún campo esté vacío
    if (!visitDate || !visitTime || !adults || !children || !infants || !firstName || !lastName || !email || !phone) {
        alert("Por favor, compconsta todos los campos obligatorios.");
        return false;
    }

    // Validar que todos los campos numéricos sean mayores que 0
    if (parseInt(adults) < 1 || parseInt(children) < 1 || parseInt(infants) < 1) {
        alert("La cantidad de visitantes debe ser mayor que 0.");
        return false;
    }

    // Validar que al menos un adulto esté presente
    if (parseInt(adults) < 1) {
        alert("Debe haber al menos un adulto presente.");
        return false;
    }

    // Validar que la fecha de visita sea en el futuro
    var today = new Date().toISOString().split("T")[0];
    if (visitDate < today) {
        alert("La fecha de visita debe ser en el futuro.");
        return false;
    }

    // Validar que la hora de visita sea válida si la fecha es del día siguiente
    var selectedDate = new Date(visitDate);
    var currentDate = new Date();
    var tomorrow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    if (selectedDate.getTime() === tomorrow.getTime() && visitTime === "") {
        alert("Por favor, selecciona una hora de visita para el día de mañana.");
        return false;
    }

    // Validar formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un email válido.");
        return false;
    }

    // Validar que el teléfono sea un número válido (opcionalmente se puede ajustar este regex)
    var phoneRegex = /^[0-9-+\s()]*$/;
    if (!phoneRegex.test(phone)) {
        alert("Por favor, introduce un número de teléfono válido.");
        return false;
    }

    return true;
}

