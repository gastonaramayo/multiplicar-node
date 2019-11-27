//SIEMPRE AL INICIO LOS REQUIREDS
//Requireds
// const fs = require('fs');
// const fs = require('express'); 
// const fs = require('./fs');  
const argv = require('./config/yargs').argv;
const colors = require('colors');


//AQUI ABAJO REQUERIMOS (IMPORTAMOS) EL ARCHIVO MULTIPLICAR
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')


let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');

}

console.log(argv);



// console.log(argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1]