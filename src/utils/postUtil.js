import axios from 'axios';
import enviroment from '../env/env';

const url = enviroment.posts;

const getTasksDetails = (id) => { 
    return axios.get(url+`?userId=${id}`) 
}

const getTaskLimitedTitle = async(id, limit) => { 
    let resp =  await getTasksDetails(id);
    let data = resp.data;
    console.log(data);
    let tasks = data.splice(0, limit);
    let finalTasks = tasks.map((task)=>{
        return task.title;
    })
    return finalTasks;
}


const postUtil = {
    getTaskLimitedTitle
}

export default postUtil;