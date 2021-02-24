const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    try {

        
        let salida = '';
        let consola = '';
    
        for(let i=1; i <= hasta; i++){
            salida += `${base} x ${i} = ${i*base}\n`;
            consola += colors.blue(`${base} `) + colors.red(`x`) + colors.blue(` ${i} `) + colors.red(`=`) + colors.trap(` ${i*base}\n`);
        }
        
        if (listar) {
            console.log("===========================================".green)
            console.log("               Tabla del".red, base);
            console.log("===========================================".green)

            console.log(salida);
        }
        
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        return `tabla-${ base }.txt`;            
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}