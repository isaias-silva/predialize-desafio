const { Router } = require("express");
const clientsMock = require('../clients.mock');

const routeClient= Router()

routeClient.get('/', (req, res) => {
    res.json(clientsMock.map(client => {
        const { image_src, _id, name } = client
        const enterprises = client.enterprises.length

        let realties = 0
        client.enterprises.forEach((enterprise) => {
            realties += parseInt(enterprise.realties)
        })
        return { image_src, _id, name, enterprises, realties }
    }))
})
routeClient.get('/totalities', (req, res) => {
    const clients = clientsMock.length
    let enterprise = 0
    let realties = 0

    clientsMock.forEach(client => {

        enterprise += client.enterprises.length
        client.enterprises.forEach(enterprise => realties += parseInt(enterprise.realties))
    })

    res.json({ clients, enterprise, realties })
})

routeClient.get('/totalities/:id', (req, res) => {
    const client= clientsMock.find((client)=>client._id==req.params.id)
    let enterprise = client.enterprises.length
    let realties = 0
   
    client.enterprises.forEach((enterprise) => {
        realties += parseInt(enterprise.realties)
    })

    res.json({ enterprise, realties })
})
routeClient.get('/:id', (req, res) => {
    const client = clientsMock.find((clients) => clients._id == req.params.id)

    res.json( client )
})

module.exports={
    routeClient
}
