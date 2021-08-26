const axios = require('axios');
const { Type } = require('../db');
const { TYPE_URL } = require('../utils/constants');

//Add pokemon types to database automatically when server is up
const addTypeDb = async () => {
    try {
        const reqType = await axios.get(TYPE_URL)
        const resType = reqType.data.results
        resType.map(e => {
            Type.create({ name: e.name })
            /* console.log({name: e.name}) */
        })
    } catch (err) {
        console.log(err)
    }
}
addTypeDb()

//I bring the types from my database and send them to the router
const getTypeApi = async () => {
    const result = await Type.findAll();
    return result;
}

module.exports = getTypeApi;
