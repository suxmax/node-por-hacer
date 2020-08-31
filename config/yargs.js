const descripcion = {
    demand: true,
    descripcion: 'Marca como completado o pendiente la tarea',
    alias: 'd'
};
const completado = {
    default: true,
    alias: 'c'
}
const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'borrar un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}