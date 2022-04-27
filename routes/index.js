const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { envios } = require('../models/envios');


// Obtener todos los envios
router.get('/api/envios', (req, res) => {
    envios.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Encontrar por codigo de envios o DNI
router.get('/api/envios/:id', (req, res) => {
    envios.find({$or:[{codigo_envio: req.params.id},
        {DNI: req.params.id},   
    ]},(err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});

//Contar las filas insertadas
router.get('/api/count', (req, res) => {
envios.estimatedDocumentCount((err, estimate) => {
        if(!err) {
            res.send(`Cantidad de datos procesados : ${estimate}`);
        } else {
            console.log(err);
        }
    });
});

// Cargar envios
router.post('/api/envios/add', (req, res) => {
    const emp = new envios({
        codigo_envio: req.body.codigo_envio,    
        DNI: req.body.DNI,
        nombre: req.body.nombre,    
        email: req.body.email,    
        direccion:req.body.direccion,    
        ciudad: req.body.ciudad,    
        provincia:req.body.provincia,    
        postal_codigo:req.body.postal_codigo ,    
        ciudad_codigo:req.body.ciudad_codigo ,    
        DNI_recepcion:req.body.DNI_recepcion,
        direccion_a_nombre:req.body.direccion_a_nombre ,    
        direccion_al_correo_electronico:req.body.direccion_al_correo_electronico ,    
        direccion_a_la_calle1:req.body.direccion_a_la_calle1,   
        direccion_a_la_ciudad:req.body.direccion_a_la_ciudad ,    
        direccion_a_la_provincia:req.body.direccion_a_la_provincia,    
        direccion_al_codigo_postal: req.body.direccion_al_codigo_postal,    
        direccion_al_codigo_del_pais:req.body.direccion_al_codigo_del_pais ,    
        trama_longitud:req.body.trama_longitud ,    
        ancho_paquete:req.body.ancho_paquete ,    
        altura_paquete:req.body.altura_paquete ,    
        tipo_dimension_paquete:req.body.tipo_de_peso_del_paquete ,    
        peso:req.body.peso ,    
        tipo_de_peso_del_paquete:req.body.tipo_de_peso_del_paquete,
        status:req.body.status   
    });
    emp.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, status: 'Cliente ha recibido paquete', addenvios: data})
        } else {
           console.log(err);
        }
    });
});

// Ingresar envios recibido
router.post('/api/envios/recibido', (req, res) => {
    const emp = new envios({
        codigo_envio: req.body.codigo_envio,    
        DNI: req.body.DNI,
        nombre: req.body.nombre,    
        email: req.body.email,    
        direccion:req.body.direccion,    
        ciudad: req.body.ciudad,    
        provincia:req.body.provincia,    
        postal_codigo:req.body.postal_codigo ,    
        ciudad_codigo:req.body.ciudad_codigo ,    
        DNI_recepcion:req.body.DNI_recepcion,
        direccion_a_nombre:req.body.direccion_a_nombre ,    
        direccion_al_correo_electronico:req.body.direccion_al_correo_electronico ,    
        direccion_a_la_calle1:req.body.direccion_a_la_calle1,   
        direccion_a_la_ciudad:req.body.direccion_a_la_ciudad ,    
        direccion_a_la_provincia:req.body.direccion_a_la_provincia,    
        direccion_al_codigo_postal: req.body.direccion_al_codigo_postal,    
        direccion_al_codigo_del_pais:req.body.direccion_al_codigo_del_pais ,    
        trama_longitud:req.body.trama_longitud ,    
        ancho_paquete:req.body.ancho_paquete ,    
        altura_paquete:req.body.altura_paquete ,    
        tipo_dimension_paquete:req.body.tipo_de_peso_del_paquete ,    
        peso:req.body.peso ,    
        tipo_de_peso_del_paquete:req.body.tipo_de_peso_del_paquete,
        status:req.body.status   
    });
    emp.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, status: 'Recibido', addenvios: data})
        } else {
           console.log(err);
        }
    });
});

// Actualizar estado
router.put('/api/envios/actualizar/:id', (req, res) => {


    const emp = {
        status:req.body.status   
    };
    envios.updateOne({codigo_envio:req.params.id}, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, status: 'Se ha actualizado el estado', updatenvios: data})
        } else {
            console.log(err);
        }
    });
});

// Encontrar por DNI de emisor o receptor
router.get('/api/enviar/:id', (req, res) => {
    envios.find({$or:[{DNI: req.params.id},
        {DNI_recepcion: req.params.id},   
    ]},(err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});

module.exports = router;
