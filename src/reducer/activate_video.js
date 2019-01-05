import { FETCH_ONE_VIDEO, SELECT_VIDEO } from '../actions/videos';

const initalState = null;

export default (state = initalState, action) => {
    switch (action.type) {
        case FETCH_ONE_VIDEO:
            return action.videos.items[0];
        case SELECT_VIDEO:
            return action.video;
        default:
            return state;
    }
}