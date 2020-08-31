const fs = require('fs');

let listadoPorHacer = [];

const guardarDatabase = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('database/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../database/data.json'); //per leggere il json. Automaticamente fa il lavoro sporco di convertire un file json in un oggetto js
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDatabase();
    return porHacer;
}

const getListado = () => {
    cargarDB()
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB(); //carichiamo il db
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //se non trova niente ki ritorna il valore -1

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDatabase();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDatabase();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    guardarDatabase,
    getListado,
    actualizar,
    borrar
}