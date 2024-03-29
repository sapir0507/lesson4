import axios from 'axios';
import enviroment from '../env/env';

const url = enviroment.users;

const getUsersDetails = () => { 
    return axios.get(url) 
}

const getUserDetails = (id) => { 
    return axios.get(url+id) 
}

const getEmail = async(id) => { 
    let resp =  await getUserDetails(id)
    let data = resp.data;
   
    return data.email;
}

const getUsername = async (id) => { 
    let resp =  await getUserDetails(id)
    let data = resp.data;
    return data.username; 
}

const updateUser = (id, data) => {
    const resp = axios.patch(url+id, data);
    console.log(resp);
}


const userUtil = {
    getUserDetails,
    updateUser,
    getEmail,
    getUsername,
    getUsersDetails
}

export default userUtil;