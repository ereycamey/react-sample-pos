
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
      </Card> </center>
    </Sidebar>
  );
};

export default About;