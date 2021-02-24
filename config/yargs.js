const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .check((argv, options) => {
                    if ( isNaN(argv.b)){
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                } )
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check((argv, options) => {
                    if ( isNaN(argv.b)){
                        return false;
                    }
                    return true;
                } ) 
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Indica el limite de la multiplicación'
                })
                .check((argv, options) => {
                    if ( isNaN(argv.b)){
                        return false;
                    }
                    return true;
                } ) 
                .argv;
module.exports = argv;                