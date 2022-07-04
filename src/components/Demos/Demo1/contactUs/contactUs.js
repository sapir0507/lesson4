import {useNavigate} from 'react-router-dom'
function ContactUsComp() {
    let navigage = useNavigate();

    const contactUs = () => {
        navigage('/aboutUs');
    }
    return ( <div style={{width:'500px', height: '500px', backgroundColor: 'yellow', margin: '0 auto'}}>
        <h1>Contact Us</h1>
        <button onClick={contactUs}>About Us</button>
    </div> );
}

export default ContactUsComp;