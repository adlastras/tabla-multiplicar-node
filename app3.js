const argv = require('yargs').command('listar', 'Imprime por pantalla parametros', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}).help().argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = '66';
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];

//console.log(argv.base);
console.log(argv.limite);

//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${ archivo }`))
//    .catch(e => console.log(e));
//console.log(multiplicar);