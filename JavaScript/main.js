console.log("Bien");

const listavisita = [];
var visita;
/*
    const listavisita = []; 
        - Esta línea crea una constante llamada listavisita, que es asignada a un arreglo vacío ([]). 
        En JavaScript, una constante es un tipo de variable cuyo valor no puede ser cambiado una vez que ha sido asignado. 
        El uso de const indica que listavisita siempre referenciará al mismo arreglo, aunque los elementos dentro del arreglo 
        pueden cambiar (es decir, puedes agregar o quitar elementos del arreglo).
    var visita; 
        - Esta línea declara una variable llamada visita utilizando var, que es una forma más antigua de declarar variables en JavaScript. 
        A diferencia de const, el valor de una variable declarada con var puede ser cambiado. 
        Aquí, visita se declara sin un valor inicial, lo que significa que su valor es undefined hasta que se le asigne uno.
*/
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
    /**
     *  utiliza la palabra clave let para declarar variables que pueden ser reasignadas si es necesario. 
     * Estas variables se utilizan para almacenar la información ingresada por el usuario en un formulario web, 
     * lo que permite que el código JavaScript procese o transmita estos datos posteriormente.
     */
    
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
    /**
     * Este objeto visita ahora puede ser utilizado para procesar la información del formulario, 
     * como enviarla a un servidor o utilizarla en otras partes de tu aplicación web. 
     * Es una forma estructurada y organizada de manejar los datos del usuario.
     */

    listavisita.push(visita);
    /**
     * El método .push() se utiliza para añadir un nuevo elemento al final de un arreglo. 
     * En este caso, estás añadiendo el objeto visita al arreglo listavisita. 
     * Esto significa que listavisita ahora contiene toda la información de visita como uno de sus elementos.
     */
    mostrar();
}


function mostrar() {
    // Mostrar todas las visitas almacenadas en listaVisitas
    console.log(visita);
}
/**
 * Cuando se llama a la función mostrar(), ejecuta el código dentro de su bloque {}. 
 * En este caso, el código es una simple instrucción console.log(visita);, 
 * que imprime el contenido de la variable visita en la consola del navegador. 
 * Esto es útil para depurar y verificar que los datos se están almacenando y manejando correctamente.
 * 
 * Es importante mencionar que, como visita es una variable global (debido a que fue declarada con var fuera de cualquier función), 
 * puedes acceder a ella desde cualquier parte de tu código, incluyendo dentro de la función mostrar(). 
 * Sin embargo, si visita fuera declarada dentro de una función o bloque específico con let o const, 
 * no sería accesible desde fuera de ese contexto.
 */


function validateVisitForm() {
    var visitDate = document.getElementById("visit-date").value;
    //visitDate: Recoge el valor del campo de fecha de visita del formulario.
    var visitTime = document.getElementById("hora").value;
    //visitTime: Recoge el valor del campo de hora de visita del formulario.
    var adults = document.getElementById("adults").value;
    //adults: Recoge el valor del campo de número de adultos del formulario.
    var children = document.getElementById("children").value;
    //children: Recoge el valor del campo de número de niños del formulario.
    var infants = document.getElementById("infants").value;
    //infants: Recoge el valor del campo de número de infantes del formulario.
    var firstName = document.getElementById("first-name").value;
    //firstName: Recoge el valor del campo de primer nombre del formulario.
    var lastName = document.getElementById("last-name").value;
    //lastName: Recoge el valor del campo de apellido del formulario.
    var email = document.getElementById("email").value;
    //email: Recoge el valor del campo de correo electrónico del formulario.
    var phone = document.getElementById("phone").value;
    //phone: Recoge el valor del campo de teléfono del formulario.
    var dateError = document.getElementById("date-error");
    //dateError: Obtiene el elemento del DOM que probablemente se utiliza para mostrar mensajes de error relacionados con la fecha.

    // Limpiar mensajes de error
    dateError.textContent = "";

    // Validar que ningún campo esté vacío
    if (!visitDate || !visitTime || !adults || !children || !infants || !firstName || !lastName || !email || !phone) {
        alert("Por favor, completa todos los campos obligatorios.");
        return false;
    }
    /**
     * La condición if verifica si alguna de las variables (visitDate, visitTime, adults, children, infants, firstName, lastName, email, phone) es falsa, 
     * lo que en este contexto significa que están vacías o no tienen valor.
     * 
     * El operador ! se utiliza para negar el valor de la variable, por lo que !visitDate se evalúa como true si visitDate está vacío.
     * El operador || es un OR lógico que devuelve true si al menos una de las condiciones es true.
     * Si alguna de las variables está vacía, se ejecuta el bloque de código dentro de la declaración if, que contiene dos acciones:
     * alert("Por favor, completa todos los campos obligatorios."); muestra una ventana emergente con el mensaje indicado, pidiendo 
     * al usuario que complete todos los campos.return false; detiene la ejecución de la función en la que se encuentra este código, 
     * lo que puede ser útil para evitar que se envíe un formulario con campos incompletos.
     */

    // Validar que todos los campos numéricos sean mayores que 0
    if (parseInt(adults) < 1 || parseInt(children) < 1 || parseInt(infants) < 1) {
        alert("La cantidad de visitantes debe ser mayor que 0.");
        return false;
    }
    /**
     * La función parseInt() convierte el valor de las variables adults, children e infants a un número entero. 
     * Esto es necesario porque los valores recogidos de los campos de formulario son cadenas de texto (string), 
     * incluso si el usuario ingresa números.La condición if verifica si alguna de las conversiones a entero de adults, 
     * children o infants es menor que 1. El operador || es un OR lógico que devuelve true si al menos una de las condiciones es true.
     * Si la condición if se evalúa como true (es decir, si al menos uno de los valores es menor que 1), se ejecutan dos acciones:
     * alert("La cantidad de visitantes debe ser mayor que 0."); muestra una ventana emergente con el mensaje indicado, 
     * informando al usuario que debe ingresar al menos un visitante en cada categoría.return false; detiene la ejecución de la función 
     * en la que se encuentra este código, lo que puede ser útil para evitar que se envíe un formulario con valores inválidos.
     */

    // Validar que al menos un adulto esté presente
    if (parseInt(adults) < 1) {
        alert("Debe haber al menos un adulto presente.");
        return false;
    }
    /**
     * La función parseInt() se utiliza para convertir la cadena de texto de la variable adults a un número entero. 
     * Esto es necesario porque los valores de los campos de formulario son cadenas de texto (string), incluso si parecen números.
     * La condición if verifica si el número de adultos es menor que 1 después de la conversión.
     * Si la condición se cumple (es decir, no hay adultos o el número ingresado es 0), se ejecutan dos acciones:
     * alert("Debe haber al menos un adulto presente."); muestra una ventana emergente con el mensaje indicado, 
     * informando al usuario que debe haber al menos un adulto. return false; detiene la ejecución de la función 
     * en la que se encuentra este código. Esto es útil para prevenir que el formulario se envíe con datos inválidos.
     */

    // Validar que la fecha de visita sea en el futuro
    var today = new Date().toISOString().split("T")[0];
    if (visitDate < today) {
        alert("La fecha de visita debe ser en el futuro.");
        return false;
    }
    /**
     * var today = new Date().toISOString().split("T")[0]; crea una variable llamada today y le asigna la fecha actual en formato ISO (YYYY-MM-DD). 
     * new Date() crea un objeto de fecha con la fecha y hora actuales. .toISOString() convierte la fecha a una cadena en formato ISO. 
     * .split("T")[0] divide la cadena en la letra “T” (que separa la fecha de la hora en el formato ISO) y toma solo la parte de la fecha.
     * La condición if (visitDate < today) compara la fecha de visita con la fecha actual. Si visitDate es menor que today, significa que la 
     * fecha de visita es anterior a la fecha actual.
     * Si la fecha de visita es anterior a la fecha actual, se muestra una alerta con el mensaje “La fecha de visita debe ser en el futuro.
     * ” y se retorna false. Esto detiene la ejecución de la función y puede prevenir que el formulario se envíe.
     */

    // Validar que la hora de visita sea válida si la fecha es del día siguiente
    var selectedDate = new Date(visitDate);
    var currentDate = new Date();
    var tomorrow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    if (selectedDate.getTime() === tomorrow.getTime() && visitTime === "") {
        alert("Por favor, selecciona una hora de visita para el día de mañana.");
        return false;
    }
    /**
     * var selectedDate = new Date(visitDate); crea un objeto de fecha con la fecha de visita ingresada por el usuario.
     * var currentDate = new Date(); crea un objeto de fecha con la fecha y hora actuales.
     * var tomorrow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1); crea un objeto de fecha 
     * para el día siguiente al actual, utilizando los métodos getFullYear(), getMonth() y getDate() para obtener el año, mes y día actual, 
     * respectivamente, y luego sumando 1 al día para obtener el día de mañana.
     * if (selectedDate.getTime() === tomorrow.getTime() && visitTime === "") verifica dos condiciones:
     * selectedDate.getTime() === tomorrow.getTime() compara la representación numérica del tiempo de selectedDate y tomorrow 
     * para ver si son el mismo día.
     * visitTime === "" verifica si la variable visitTime está vacía, lo que indicaría que no se ha seleccionado una hora de visita.
     * Si ambas condiciones son verdaderas (es decir, la fecha de visita es mañana y no se ha seleccionado una hora), 
     * se muestra una alerta con el mensaje “Por favor, selecciona una hora de visita para el día de mañana.” y se retorna false. 
     * Esto detiene la ejecución de la función y puede prevenir que el formulario se envíe.
     */

    // Validar formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un email válido.");
        return false;
    }
    /**
     * var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; declara una variable llamada emailRegex y le asigna una expresión 
     * regular que define un patrón para validar correos electrónicos. La expresión regular busca una cadena que:
     * No comience con espacios en blanco o el símbolo @ (^[^\s@]+).
     * Contenga el símbolo @ (@).
     * No contenga espacios en blanco o el símbolo @ después del @ y antes del punto ([^\s@]+).
     * Contenga un punto (\.).
     * No contenga espacios en blanco o el símbolo @ después del punto ([^\s@]+).
     * Termine justo después de los caracteres permitidos ($).
     * if (!emailRegex.test(email)) utiliza el método .test() para verificar si la variable email coincide con el patrón definido por emailRegex.
     * Si email no coincide con el patrón (lo que indica que no es una dirección de correo electrónico válida), 
     * se muestra una alerta con el mensaje “Por favor, introduce un email válido.” y se retorna false. Esto detiene la 
     * ejecución de la función y puede prevenir que el formulario se envíe.
     */

    // Validar que el teléfono sea un número válido (opcionalmente se puede ajustar este regex)
    var phoneRegex = /^[0-9-+\s()]*$/;
    if (!phoneRegex.test(phone)) {
        alert("Por favor, introduce un número de teléfono válido.");
        return false;
    }
    /**
     * var phoneRegex = /^[0-9-+\s()]*$/; declara una variable llamada phoneRegex y le asigna una expresión regular 
     * que define un patrón para validar números de teléfono. La expresión regular permite:
     * Números del 0 al 9 ([0-9]).
     * Guiones (-).
     * El signo más (+).
     * Espacios en blanco (\s).
     * Paréntesis (()).
     * if (!phoneRegex.test(phone)) utiliza el método .test() para verificar si la variable phone coincide con el patrón definido por phoneRegex.
     * Si phone no coincide con el patrón (lo que indica que no es un número de teléfono válido según el patrón definido), 
     * se muestra una alerta con el mensaje “Por favor, introduce un número de teléfono válido.” y se retorna false. 
     * Esto detiene la ejecución de la función y puede prevenir que el formulario se envíe.
     */

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
/**
 * La variable modelTabla comienza con la etiqueta de apertura de una tabla HTML (<table>).
 * Luego, se añade una fila de encabezados (<tr>) con las etiquetas <th> para cada columna que se mostrará en la tabla.
 * Se utiliza el método forEach para iterar sobre cada elemento del arreglo listavisita. Para cada visita (p), se añade una nueva fila (<tr>) a modelTabla.
 * Dentro de cada fila, se añaden celdas (<td>) con los datos correspondientes de la visita, como la fecha, hora, 
 * número total de visitantes (calculado sumando adultos, niños e infantes), y los detalles de contacto.
 * Después de iterar sobre todas las visitas, se cierra la etiqueta de la tabla (</table>).
 * Finalmente, se utiliza document.getElementById('lista').innerHTML = modelTabla; para insertar la tabla HTML construida en 
 * un elemento con el ID lista en la página web.
 */


