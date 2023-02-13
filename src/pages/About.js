
import { Card } from 'antd';
import Sidebar from '../components/Sidebar';
import shopnow from './shopnow2.png';
import { FaUserAlt } from 'react-icons/fa';

const About = ({ product }) => {

  return (
    <Sidebar><h1> <FaUserAlt /> About</h1>
      <center>
        <br />
        <br/>
     <Card style={{ width: 550, height:400, margin: '10px', borderColor: '#e56161' }}>
     <img src={shopnow} height="75" width="100" style={{position: 'relative'}} alt="login"/>
     <br/>
     <br/>
     <p>Contactless payments are the need of the hour given the pandemic and online shopping facilitates that. 
      Before the pandemic, a primary concern with online shopping in its nascent stages was trusting vendors and marketplaces with personal Credit or Debit Card details.
       However, with online shopping becoming more and more secure over the years, the reluctance to make online payments is gradually reducing.
        The acceptance has been built by addressing the trust issue over time by giving customers an option to pay online or to pay Cash On Delivery (COD). 
        COD addressed the trust issue and also offered an avenue for those without the financial means to make online payments using credit cards to make purchases.</p>
      </Card> </center>
    </Sidebar>
  );
};

export default About;