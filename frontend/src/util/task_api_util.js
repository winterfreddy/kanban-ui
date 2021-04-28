import axios from 'axios';

export const getTasks = () => {
    return axios.get('/tasks');
}

export const updateTask = task => {
    return axios.put('/tasks/', task);
}

export const addTask = task => {
    return axios.post('/tasks', task);
}

export const deleteTask = task => {
    return axios.delete('/tasks', task);
}