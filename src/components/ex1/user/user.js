import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import userUtil from '../../../utils/userUtil';
function UserComp() {
    const params = useParams();
    const [user, setUser] = useState({})
    const [address, setAddress] = useState({})

    useEffect(() => {
        const getUser = async() => {
            const user = await userUtil.getUserDetails(params.id);
            const data = user.data;
            setUser(data);
            setAddress(data.address);
        }
      getUser()
    }, [params])
    
    return ( <div>
        <h1 style={{marginLeft: '25px'}}>User Comp</h1>
        {user && 
        <table style={{border: '1px solid', margin: '0 auto'}}>
            <tbody>
                <tr>
                    <th style={{border: '1px solid', margin: '0 auto', padding: '5px'}}>name</th>
                    <th style={{border: '1px solid', margin: '0 auto', padding: '5px'}}>email</th>
                    <th style={{border: '1px solid', margin: '0 auto', padding: '5px'}}>city</th>
                </tr>
                <tr>     
                    <td style={{border: '1px solid', margin: '0 auto', padding: '5px'}}>{user.name}</td>
                    <td style={{border: '1px solid', margin: '0 auto', padding: '5px'}}>{user.email}</td>
                    <td style={{border: '1px solid', margin: '0 auto', padding: '5px'}}>{address.city}</td>       
                </tr>
            </tbody>
        </table>
        }
    </div> );
}

export default UserComp;