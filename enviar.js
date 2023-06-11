function enviar(){
  db.collection("Registros").add({
    Nombre: document.getElementById('exampleInputEmail1').value,
    Apellido: document.getElementById('exampleInputPassword1').value,

})
.then((docRef) => {
    alert("Registro Exitoso")
})
.catch((error) => {
    alert("Error en el registro")
});
}
