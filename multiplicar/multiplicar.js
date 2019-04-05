//Requireds
const fs = require('fs'); // --> Proyecto propio de node. Ya existe dentro de node.
//const fs = require('express'); --> No viene en doc, no es propia. Instala y se utilizara (No nativo de node)
//const fs = require('./fs'); --> Son archivos nuestros dentro de nuestro proyecto

const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('---------------'.green);
    console.log(`--Tabla del ${base}--`.green);
    console.log('---------------'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${i*base}`);
    }
}


//module.exports.crearArchivo = ( base ) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} no es un numero, o ${limite} no es un numero`);
            return;
        }

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            contenido += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, contenido, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}