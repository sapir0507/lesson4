import {Link, Routes, Route} from 'react-router-dom'


function UsersComp({users}) {
    return ( <div>
        <ul>
            {users.map((user, index)=>{
                return <li key={index}><Link to={'user/' + user.id}>{user.name}</Link></li>
            })}
        </ul>

    </div> );
}

export default UsersComp;