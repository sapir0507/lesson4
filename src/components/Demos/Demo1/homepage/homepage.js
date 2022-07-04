import {Link, Routes, Route} from 'react-router-dom'
import AboutUsComp from '../aboutAs/aboutUs';
import ContactUsComp from '../contactUs/contactUs';

function HomepageComp() {
    return ( <div>
        <div style={{margin:'20px', fontSize:'20px'}}>
        <span style={{margin:'20px 20px'}}> 
            <Link to="/aboutUs">About Us</Link>
        </span>
        <span style={{margin:'20px'}}> 
            <Link to="/contactUs">Contact Us</Link>
        </span>

           
        </div>
        <h1 style={{textAlign: 'center'}}>Homepage</h1>

        <Routes>
            <Route path='/aboutUs' element={<AboutUsComp/>}></Route>
            <Route path='/contactUs' element={<ContactUsComp/>}></Route>
        </Routes>
        <h1 style={{textAlign: 'center'}}>Homepage footer</h1>


    </div> );
}

export default HomepageComp;