import React, { Component } from 'react'
import {useImmer} from 'use-immer'
// updating state of an Object using Immer
export default function Immer() {

    const [state, updateState] = useImmer({
        name : 'John',
        age  : 30
    });

    function handleChangeName(e) {
        updateState(draft => {
            draft.name = e.target.value;
        })
    }
    function handleChangeAge(e) {
        updateState(draft => {
            draft.age = e.target.value;
        })
    }

    return (  
        <>
        <h1>Immer Component</h1>
        <label>Name : </label>
        <input 
        type="text"
        value={state.name}
        // onChange={handleChangeName} 
        onChange={ e => {
            updateState(draft => {
                draft.name = e.target.value;
            })
        }}
        />
        <label>Age : </label>
        <input 
        type="text"
        value={state.age}
        onChange={handleChangeAge} />
        <br />
        <h3>You are {state.name} and {state.age} Jahre Alt</h3>
        </>
    );
}