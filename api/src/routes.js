

const { routeClient } = require('./clients.route');
module.exports.load = (app) => {
    app.use('/clients', routeClient)

};
