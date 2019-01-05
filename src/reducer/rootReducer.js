import { combineReducers } from 'redux';
import VideoReducer from './video';
import ActiveVideoReducer from './activate_video';

const rootReducer = combineReducers({
    VideoReducer,
    ActiveVideoReducer
});

export default rootReducer;