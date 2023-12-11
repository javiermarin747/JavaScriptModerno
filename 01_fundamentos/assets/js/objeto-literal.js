
// objeto literal
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.0506,
        lng: -118.70
    },
    trajes:['Traje1','Traje2','Traje3'],
    direccion: {
        zip: '1080, 2320',
        ubicacion: 'Albacete, España'
    }

};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre',personaje['nombre']);

console.log('Latitud', personaje.coords.lat);

console.log('Num Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length-1]);

const x='vivo';
console.log('Vivo', personaje[x]);

// Mas detalles

personaje.casado=true;
delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries (personaje);
console.log(entriesPares);

Object.freeze(personaje);
personaje.dinero=200000000000; // esto no tendria efecto
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades);
console.log(valores);