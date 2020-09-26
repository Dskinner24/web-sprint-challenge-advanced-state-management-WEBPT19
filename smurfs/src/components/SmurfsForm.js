import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PostSmurfs } from '../actions/actions';

const SmurfsForm = (props) => {
    const [smurfs, setSmurfs] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleInput = e => {
        setSmurfs({ ...smurfs, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.PostSmurfs(smurfs)
    }

    return (
        <div className='smurfs'>
            <form>
                <label className='label' htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    label='name'
                    placeHolder="Enter Smurf's Name Here"
                    value={props.name}
                    onChange={handleInput}
                />

                <label className='label' htmlFor='age'>Age</label>
                <input
                    type='number'
                    name='age'
                    label='age'
                    placeholder="Enter Smurf's Age Here"
                    value={props.age}
                    onChange={handleInput}
                />

                <label className='label' htmlFor='height'>Height (cm)</label>
                <input
                    type='number'
                    name='height'
                    label='height'
                    placeholder="Enter Smurf's Height Here"
                    value={props.height}
                    onChange={handleInput}
                />

                <button onClick={handleSubmit}>Add Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {PostSmurfs})(SmurfsForm)