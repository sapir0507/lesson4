import {useNavigate} from 'react-router-dom'
function AboutUsComp() {
    let navigage = useNavigate();

    const aboutUs = () => {
        navigage('/contactUs');
    }

    return ( <div style={{width:'500px', height: '500px', backgroundColor: 'red', margin: '0 auto'}}>
        <h1>About Us</h1>
        <button onClick={aboutUs}>Contact Us</button>
    </div> );
}

export default AboutUsComp;