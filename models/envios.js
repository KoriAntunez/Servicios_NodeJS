let mongoose = require('mongoose');



// envios Schema
const envios = mongoose.model('envios', {
    codigo_envio: {
        type: String,
        required: true,
    },
    DNI:{
        type: String,
        required: true,
    },    
    nombre: {
        type: String,
        required: true,
    },    
    email: {
        type: String,
        required: true,
    },    
    direccion: {
        type: String,
        required: true,
    },    
    ciudad: {
        type: String,
        required: true,
    },    
    provincia: {
        type: String,
        required: true,
    },    
    postal_codigo: {
        type: String,
        required: true,
    },    
    ciudad_codigo: {
        type: String,
        required: true,
    },
    DNI_recepcion:{
        type: String,
        required: true,        
    },    
    direccion_a_nombre: {
        type: String,
        required: true,
    },    
    "direccion_al_correo_electronico": {
        type: String,
        required: true,
    },    
    "direccion_a_la_calle1": {
        type: String,
        required: true,
    },   
    "direccion_a_la_ciudad": {
        type: String,
        required: true,
    },    
    "direccion_a_la_provincia": {
        type: String,
        required: true,
    },    
    "direccion_al_codigo_postal": {
        type: String,
        required: true,
    },    
    "direccion_al_codigo_del_pais": {
        type: String,
        required: true,
    },    
    "trama_longitud": {
        type: String,
        required: true,
    },    
    "ancho_paquete": {
        type: String,
        required: true,
    },    
    "altura_paquete": {
        type: String,
        required: true,
    },    
    "tipo_dimension_paquete": {
        type: String,
        required: true,
    },    
    "peso": {
        type: String,
        required: true,
    },    
    "tipo_de_peso_del_paquete": {
        type: String,
        required: true,},
    status:{
        type: String,
        required: true,
    }
});



module.exports = {envios}