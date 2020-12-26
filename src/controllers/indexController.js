const axios = require('axios').default;

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

module.exports = {
    async coins(req, res) {
        try {
            const rs = await axios.get(API_URL);
            return res.send(rs.data);
        } catch (err) {
            console.error(err);
        }
    },

    async getCoin(req, res) {
        try {
            const coin = req.params.code;
            const rs = await axios.get(`${API_URL}/${coin}`);
            return res.send(rs.data);
        } catch (err) {
            console.error(err);
        }
    },
};