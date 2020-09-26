import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchSmurfs } from "../actions/actions";
import SmurfCard from "./SmurfsCard";

const SmurfList = (props) => {
    useEffect(() => {
        props.FetchSmurfs()
    }, [])

    return(
        <div className='content'>
            {props.smurfs.map(smurf => (<SmurfCard smurf={smurf}/>))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {FetchSmurfs})(SmurfList)