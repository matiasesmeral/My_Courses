
const object = {
    nombre : "matias",
    apellido: "sanguino",
    edad: 22,
    info: function showFullInfo(){
        return "name: "  + this.nombre + " apellido: "  + this.apellido + "  EDAD: " + this.edad;
    },
    info2: function showShortInfo(){
        return "name: "  + " apellido: "  + "  EDAD: " ;
    }  
}


let test = document.querySelector("#test");
let test2 = document.querySelector("#test2");
let hide = document.getElementById("botonhide");

test.addEventListener("click",function(){
    test2.innerHTML = object.info();
})

hide.addEventListener("click",function(){
    test2.innerHTML = object.info2();
})


console.log(object.info())