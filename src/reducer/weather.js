import { FETCH_WEATHER } from '../actions/weather';
const initialState = [];

export default (state = initialState, action) => {
    try {
        switch (action.type) {
            case FETCH_WEATHER:
                var currentState = state;
                // 查找当前是否有该数据
                const eCity = currentState.find((data) => {
                    return data.city.name === action.weathers.city.name
                });
                if (eCity === undefined) {
                    return [...currentState, action.weathers];
                } else {
                    // 如果有该数据，则进行更新
                    currentState.splice(currentState.indexOf(eCity, 1));
                    currentState.unshift(eCity);
                }
                return currentState;
            default:
                return state;
        }
    } catch {
        return state;
    }
}
