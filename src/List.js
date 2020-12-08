import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const List = () => {

    const ctx = useContext(TodoContext);

    const { tasks } = ctx;


    return (
        <div>
            {
                tasks.map((item) => (<p key={Math.random()}>{item}</p>))
            }
        </div>
    )
}

export default List;