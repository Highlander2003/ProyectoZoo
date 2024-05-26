console.log("Bien");
const listavisita = [];
var visita;
function mostrarLista() {

    let visitDate = document.getElementById('visit-date').value;
    let visitTime = document.getElementById('hora').value;
    let adults = document.getElementById('adults').value;
    let children = document.getElementById('children').value;
    let infants = document.getElementById('infants').value;
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let additionalRequests = document.getElementById('additional-requests').value;
    
    visita = {
        fecha: visitDate,
        hora: visitTime,
        adultos: adults, 
        ninos: children,
        infantes: infants,
        nombre: firstName,
        apellido: lastName,
        email: email,
        telefono: phone,
        peticionesAdicionales: additionalRequests,
    };

    listavisita.push(visita);

    mostrar();
}


function mostrar() {
    // Mostrar todas las visitas almacenadas en listaVisitas
    console.log(visita);
}


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
        alert("Por favor, completa todos los campos obligatorios.");
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

function insertarTabla() {
    var modelTabla = '<table>';
    modelTabla += '<tr> <th>N°</th> <th>Fecha</th> <th>Hora</th> <th># Visitantes</th> <th>Adultos</th> <th>Niños</th> <th>Infantes</th> <th>Apellido</th> <th>Nombre</th> <th>Contacto</th></tr>';
    listavisita.forEach((p, index) => {
        modelTabla += '<tr>';
        modelTabla += '<td>' + (index + 1) + '</td>';
        modelTabla += '<td>' + p.fecha + '</td>';
        modelTabla += '<td>' + p.hora + '</td>';
        modelTabla += '<td>' + (parseInt(p.adultos) + parseInt(p.ninos) + parseInt(p.infantes)) + '</td>';
        modelTabla += '<td>' + p.adultos + '</td>';
        modelTabla += '<td>' + p.ninos + '</td>';
        modelTabla += '<td>' + p.infantes + '</td>';
        modelTabla += '<td>' + p.email + '</td>';
        modelTabla += '</tr>';
    });
    modelTabla += '</table>';
    document.getElementById('lista').innerHTML = modelTabla;
}



