const opts = {
    base: {
        demand: true, //le da un valor obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10' //valor por defecto
    }
}




const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;



module.exports = {
    argv
}