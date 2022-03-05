const mostrarReloj = () => {
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  document.getElementById('hora').innerHTML = `${hora}: ${minutos}: ${segundos}`
  console.log(`${hora}:${minutos}:${segundos}`); 
};
setInterval(mostrarReloj, 1000)



