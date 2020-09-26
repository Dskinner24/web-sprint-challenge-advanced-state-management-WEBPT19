import axios from 'axios';

export const FETCH_SMURFS = 'FETCH-SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILED = 'FETCH_SMURFS_FAILED';

export const FetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURFS })
    axios
        .get('http://localhost:3333/smurfs')
        .then( res => {
            console.log("Fetch Success", res.data)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch( err => {
            console.log("Fetch Failed", err)
            dispatch({ type: FETCH_SMURFS_FAILED, payload: err })
        })
}

export const POST_SMURFS = 'POST_SMURFS';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILED = 'POST_SMURFS_FAILED';

export const PostSmurfs = (smurfs) => (dispatch) => {
    dispatch({ type: POST_SMURFS })
    axios
        .post('http://localhost:3333/smurfs', smurfs)
        .then( res => {
            console.log("Post Successful", res.data);
            dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data })
        })
        .catch( err => {
            console.log("Post Failed", err);
            dispatch({ type: POST_SMURFS_FAILED, payload: err})
        })
}