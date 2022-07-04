import axios from 'axios';
import enviroment from '../env/env';

const url = enviroment.todos;

const getAllTodos = () => { 
    return axios.get(url) 
}

const getTodosDetails = (id) => { 
    return axios.get(url+`?userId=${id}`) 
}

const getTodoLimitedTitle = async(id, limit) => { 
    let resp =  await getTodosDetails(id);
    let data = resp.data;
    console.log(data);
    let tasks = data.splice(0, limit);
    let finalTasks = tasks.map((task)=>{
        return task.title;
    })
    return finalTasks;
}


const todoUtil = {
    getTodoLimitedTitle,
    getAllTodos,
    getTodosDetails
}

export default todoUtil;