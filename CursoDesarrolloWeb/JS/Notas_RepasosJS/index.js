function operacionAsincronica(parametro, callback) {
  // Hacer alguna operación asincrónica aquí
  // Una vez que la operación haya terminado, invocar el callback

  // Simulación de una operación asincrónica con setTimeout
  setTimeout(function() {
    const resultado = parametro * 2;
    callback(resultado); // Invocar el callback con el resultado
  }, 2000);
}

// Uso del callback
operacionAsincronica(5, function(resultado) {
  console.log('El resultado es:', resultado);
});

console.log('Operación en progreso...');

function main(){
  const object = {
    name: "Masaes",
    age: 22,
    major: "student",
    toString: function(){
      console.log(`el nombre del usuario es: ${this.name} (${this.age} ${this.major})`)
    }
  }
  object.toString();
}
main();

export {
  main as funcionP,
  operacionAsincronica as opA
}


