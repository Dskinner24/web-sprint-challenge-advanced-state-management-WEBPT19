import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILED, POST_SMURFS, POST_SMURFS_SUCCESS, POST_SMURFS_FAILED } from '../actions/actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS:
            return {
                ...state, isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case POST_SMURFS:
            return {
                ...state,
                isPosting: true,
                smurfs: [...state.smurfs]
            }
        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                isPosting: false,
                smurfs: action.payload
            }
        case POST_SMURFS_FAILED:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default smurfReducer;