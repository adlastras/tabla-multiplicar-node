const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime por pantalla parametros', opciones)
    .command('crear', 'Creación de la tabla segun base y limite recibidos', opciones)
    .help()
    .argv;

module.exports = { argv };