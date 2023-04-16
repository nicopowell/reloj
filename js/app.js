function obtenerFechaYHora() {
  let fechaActual = new Date();

  let diasSemanas = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  let mesesAnio = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let parrafoFecha = document.getElementById("fecha");
  parrafoFecha.innerHTML = `${diasSemanas[fechaActual.getDay()]}, ${fechaActual.getDate()} de ${
    mesesAnio[fechaActual.getMonth()]
  } del ${fechaActual.getFullYear()}`;

  let parrafoHoraMin = document.querySelector("#horasMinutos");
  let parrafoSeg = document.querySelector("#seg");
  let parrafoAmPm = document.querySelector("#amPm");

  let hora = fechaActual.getHours(),
    minutos = fechaActual.getMinutes(),
    segundos = fechaActual.getSeconds();

  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (hora > 12) {
    hora = hora - 12;
    parrafoAmPm.innerHTML = "PM";
  } else {
    parrafoAmPm.innerHTML = "AM";
  }

  if (hora < 10) {
    hora = "0" + hora;
  }

  parrafoHoraMin.innerHTML = `${hora} : ${minutos} : `;
  parrafoSeg.innerHTML = segundos;
}

setInterval(obtenerFechaYHora, 1000);
