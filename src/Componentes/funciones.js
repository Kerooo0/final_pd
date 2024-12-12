import { meses } from './meses';
import { paises_sudamericanos } from './paises';
import { signos } from './signos';
import { edad } from './edad';

export function mostrarSigno() {
    var signoSeleccionado = document.getElementById("signo_zodiacal").value;
    var signoEncontrado = signos.find(signo => signo.nombre === signoSeleccionado);
    var listaSignos = document.getElementById("signos-lista");
    listaSignos.innerHTML = "";   // limpio la lista
    if (signoEncontrado) {
        var li = document.createElement("li");
        li.innerHTML = "<h2>" + signoEncontrado.nombre + "</h2><ul><li>Fecha: " + signoEncontrado.fecha + "</li><li>Elemento: " + signoEncontrado.elemento + "</li><li>Regente: " + signoEncontrado.regente + "</li><li>Compatibilidad: " + signoEncontrado.compatibilidad + "</li><li>Descripcion: " + signoEncontrado.descripcion + "</li></ul>";
        listaSignos.appendChild(li);
    } else {
        var li = document.createElement("li");
        li.innerHTML = "<h2> Signo no encontrado </h2>";
        listaSignos.appendChild(li);
    }
}

export function mostrarEdad() {
    var edadSeleccionada = document.getElementById("edad").value;
    var edadEncotrada = edad.find(e => e.edad === edadSeleccionada);
    var listaEdad = document.getElementById("edad-lista");
    listaEdad.innerHTML = "";   // limpio la lista
    if (edadEncotrada) {
        var li = document.createElement("li");
        li.innerHTML = "<h2>" + edadEncotrada.edad + "</h2><ul><li>Descripcion: " + edadEncotrada.descripcion + "</li></ul>";
        listaEdad.appendChild(li);
    } else {
        var li = document.createElement("li");
        li.innerHTML = "<h2> Edad no encontrada </h2>";
        listaEdad.appendChild(li);
    }
}


export function mostrarMes() {
    var mesSeleccionado = document.getElementById("mes_nacimiento").value;
    var mesEncontrado = meses.find(mes => mes.nombre === mesSeleccionado);
    var listaMeses = document.getElementById("meses-lista");
    listaMeses.innerHTML = "";   // limpio la lista 

    if (mesEncontrado) {
        var li = document.createElement("li");
        li.innerHTML = "<h2>" + mesEncontrado.nombre + "</h2>" + "<h3> Dato Historico: </h3>" + "<ul><li>" + mesEncontrado.dato + "</li></ul>";
        listaMeses.appendChild(li);
    } else {
        var li = document.createElement("li");
        li.innerHTML = "<h2> Mes no encontrado </h2>";
        listaMeses.appendChild(li);
    }
}

let paisSeleccionado = ""; // Variable para almacenar el país seleccionado

export function seleccionarPais(event) {
    var img = event.target;
    var banderas = document.querySelectorAll('.banderas img');
    banderas.forEach(bandera => bandera.classList.remove('selected'));

    if (img) {
        img.classList.add('selected');
        paisSeleccionado = img.alt.toLowerCase(); // Actualizamos la variable con el país seleccionado
        document.getElementById("pais").value = paisSeleccionado;
    }
}

export function mostrarPais() {
    var paisForm = document.getElementById("pais").value.toLowerCase();
    if (!paisForm && paisSeleccionado) { // Usamos el país almacenado si el input está vacío
        paisForm = paisSeleccionado;
    }
    var paisEncontrado = paises_sudamericanos.find(pais => pais.nombre.toLowerCase() === paisForm);
    var listaPais = document.getElementById("paises-lista");
    listaPais.innerHTML = "";   // Limpiamos la lista
    if (paisEncontrado && paisEncontrado.ubicacion) {
        var li = document.createElement("li");
        li.innerHTML = "<h2>" + paisEncontrado.nombre + "</h2><ul><li>Superficie: " + paisEncontrado.superficie + "</li><li>Habitantes: " + paisEncontrado.habitantes + "</li><li>Capital: " + paisEncontrado.capital + "</li><li>Idioma: " + paisEncontrado.idioma + "</li><li>Moneda: " + paisEncontrado.moneda + "</li><li>Hora: " + paisEncontrado.hora + "</li><li>Dominio: " + paisEncontrado.dominio + "</li></ul>";
        var iframe = document.createElement("iframe");
        iframe.src = paisEncontrado.ubicacion;
        iframe.width = "600";
        iframe.height = "450";
        iframe.style.border = "0";
        iframe.allowFullscreen = "";
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        li.appendChild(iframe);
        listaPais.appendChild(li);
    } else {
        var li = document.createElement("li");
        li.innerHTML = "<h2> País no encontrado </h2>";
        listaPais.appendChild(li);
    }
}