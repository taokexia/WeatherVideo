const API_KEY = '7797690158ecfdd0a98bf5cbddfad867\n';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(keyword) {
    if (typeof (keyword) === 'string') {
        return (dispatch) => {
            fetch(`${WEATHER_URL}&q=${keyword}`)
                .then((resp) => resp.json())
                .then(resp => {
                    dispatch({
                        type: FETCH_WEATHER,
                        weathers: resp
                    })
                })
        }
    } else {
        return (dispatch) => {
            fetch(`${WEATHER_URL}&lat=${keyword.latitude}&lon=${keyword.longitude}`)
                .then((resp) => resp.json())
                .then(resp => {
                    dispatch({
                        type: FETCH_WEATHER,
                        videos: resp
                    })
                })
        }
    }
}