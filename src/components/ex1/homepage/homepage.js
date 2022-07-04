import { useEffect, useState } from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import userUtil from '../../../utils/userUtil';
import UserComp from '../user/user';
import UsersComp from '../users/users';



function HomepageComp() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const users = await userUtil.getUsersDetails();
            const data = users.data;
            setUsers(data);
        }
        getUsers()
    }, [])
    
    return ( <div>
        <div style={{margin:'20px', fontSize:'20px'}}>
            <span style={{margin:'20px 20px'}}> 
                <Link to="/aboutUs">About Us</Link>
            </span>
            <span style={{margin:'20px'}}> 
                <Link to="/contactUs">Contact Us</Link>
            </span>
        </div> 
        <hr />
        <h1 style={{textAlign: 'center'}}> Ex1 Homepage</h1>

       <UsersComp users={users}></UsersComp>

        <Routes>
            <Route path='/user/:id' element={<UserComp/>}></Route>
        </Routes>
    </div> );
}

export default HomepageComp;