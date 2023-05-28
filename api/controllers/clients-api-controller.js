import * as model from '../../models/clients-model.js'

function getClients(req, res) {

    model.getClients()
        .then(clients => {
            if(clients.length === 0) {
                res.status(404).json({ error: 'No se encontraron clientes' })
            } else {
                res.status(200).json(clients)
            }
        })
}


function createClient (req, res) {
    const client = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        descripcion: req.body.descripcion
    }

    model.createClient(client)
        .then(client => {
            res.status(201).json(client)
        })
}


export {
    getClients,
    createClient
}