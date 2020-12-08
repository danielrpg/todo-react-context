import React from 'react';

const initialData = {
    tasks:[],
    setTasks:()=>{}
}

export const TodoContext = React.createContext(initialData);