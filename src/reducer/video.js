import { FETCH_VIDEOS } from '../actions/videos';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_VIDEOS:
            return action.videos.items;
        default:
            return state;
    }
}