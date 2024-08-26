function imprimir_consola() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const nacionalidad = document.getElementById("nacionalidad").value;
  const horario = document.getElementById("horario").value;

  console.log(`Nombre: ${nombre}`);
  console.log(`Apellido: ${apellido}`);
  console.log(`Nacionalidad: ${nacionalidad}`);
  console.log(`Horario: ${horario}`);
}
