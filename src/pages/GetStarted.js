import React from 'react';
import shopnow from './shopnow.png';
import { Link } from 'react-router-dom';
import {Button} from 'antd';
const GetStarted = () => {
  return (
    <div style={styles.container}>
      <br/>
      <br/>
      <br/>
      <img src={shopnow} height="400" width="550" style={{position: 'relative'}} alt="login"/>
      <h1 style={styles.header}> GoShop </h1>
      <p style={styles.paragraph}>Welcome to our Shop</p>
      <Link to="/product"><Button style={styles.button}><center>Shop Now</center></Button></Link>
      
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#f34343',
    color: 'white',
    height: '55px',
    width: '150px',
    fontSize: '18px',
    padding: '15px 30px',
    borderRadius: '5px',
    border: 'none'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '10px'
  },
  list: {
    listStyleType: 'decimal',
    marginLeft: '20px'
  },
  listItem: {
    fontSize: '16px',
    marginTop: '10px'
  }
};

export default GetStarted;