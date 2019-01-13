import { combineReducers } from 'redux';
import VideoReducer from './video';
import ActiveVideoReducer from './activate_video';
import weatherReducer from './weather';

const rootReducer = combineReducers({
    VideoReducer,
    ActiveVideoReducer,
    weatherReducer
});

export default rootReducer;