const mostrarReloj = () => {
  let fecha = new Date();
  let hora = formatoHora(fecha.getHours());
  let minutos = formatoHora(fecha.getMinutes());
  let segundos = formatoHora(fecha.getSeconds());

  let anio = fecha.getFullYear();

  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sept",
    "Oct",
    "Nov",
    "Dic",
  ];
  const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDay();

  let mes = meses[fecha.getMonth()];

  console.log(`${hora}:${minutos}:${segundos}`);
  console.log(`${diaSemana}, ${dia} / ${mes} / ${anio}`);

  document.getElementById(
    "hora"
  ).innerHTML = `${hora}: ${minutos}: ${segundos}`;
  document.getElementById(
    "fecha"
  ).innerHTML = `${diaSemana}, ${dia} / ${mes} / ${anio}`;

  document.getElementById('contenedor').classList.toggle('animar')
};

const formatoHora = (hora) => {
  if (hora < 10) {
    hora = "0" + hora;
  }
  return hora;
};

setInterval(mostrarReloj, 1000);
