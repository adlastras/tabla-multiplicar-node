const argv = require('yargs').command('listar', 'Imprime por pantalla parametros', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}).command('crear', 'Creación de la tabla segun base y limite recibidos', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l',
        demand: true
    }
}).help().argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}