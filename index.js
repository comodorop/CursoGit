import { promises } from "fs";

function saludar(saludo) {
    return new promises((resolve, reject) => {
        console.log(saludo)
        console.log(error)
    })

}

saludar("Hola mundo")