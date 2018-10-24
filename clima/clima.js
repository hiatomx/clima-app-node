const axios = require('axios');
const APIKey_OpenWeather = 'YOUR_APIKEY';

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${APIKey_OpenWeather}`);

    if (resp.data.code === 400) {
        throw new Error(`No hay resultados para las coordenadas ${lat}, ${lng}`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}