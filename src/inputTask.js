import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const InputTask = () => {

    const ctx = useContext(TodoContext);

    const { tasks, setTasks } = ctx;

    const [value, setValue] = useState('');

    const changeValue =(ev) => {
        setValue(ev.target.value);
    }

    const save = () => {
        setTasks([...tasks, value]);
    }

    return (
        <>
            <input 
                type="text"
                value={value}
                onChange={changeValue} />
            <button onClick={save}> Save </button>
        </>
    )
}

export default InputTask;