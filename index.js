import { promises } from "fs";

function saludar(saludo) {
    return new promises((resolve, reject) => {
        console.log(saludo)
        console.log(error)
    })

}


saludar("Hola mundo").then(msg =>{
    console.log("se termino el mensaje")
}).catch(err=>{
    console.log(err)
});


console.log("Mensaje 1");
console.log("Mensaje 2");
console.log("Mensaje 3");
