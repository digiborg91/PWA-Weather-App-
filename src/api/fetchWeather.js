import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3dda47ad24d3be63254f53c5615350af'

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: { 
            q: query,
            unit: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}