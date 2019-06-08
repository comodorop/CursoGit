import { promises } from "fs";

//realiza un saludo en consola
function saludar(saludo) {
    return new promises((resolve, reject) => {
        console.log(saludo)
        console.log(error)
    })

}

//esta función realiza un hola mundo en consola
saludar("Hola mundo").then(msg =>{
    console.log("se termino el mensaje")
}).catch(err=>{
    console.log(err)
})

console.log("Israel Domínguez")