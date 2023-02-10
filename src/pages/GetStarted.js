import React from 'react';
import { Layout, Typography, Carousel, Row, Col, Button } from 'antd';
import shopnow from './shopnow2.png';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const { Text, Title } = Typography;

const GetStarted = () => (
  <>
    <Header style={{ background: '#fff', padding: 0 }}>
        <br/>
        &nbsp; <img src={shopnow} height="50" width="60" style={{position: 'relative'}} alt="login"/><Link to="/faqs"><Button type="link" style={{ marginLeft: '1750px' }} strong> FAQs </Button></Link>
      <h2><Text style={{ marginLeft: '16px' }} strong> GoShop</Text></h2>
      
    </Header>
    <div style={{ padding: '24px' }}>
      <Carousel autoplay>
        <div>
          <img
            src="https://marketplace.canva.com/EAFNlE5k3V0/1/0/1600w/canva-black-yellow-modern-new-arrival-fashion-women-banner-SET_Ule4DJ4.jpg"
            alt="Slide 1"
            style={{ width: '100%', height: '400px' }}
          />
        </div>
        <div>
          <img
            src="https://marketplace.canva.com/EAFRQA9shyY/1/0/1600w/canva-grey-beige-elegant-luxury-jewelry-facebook-ads-posU6jG9Yvw.jpg"
            alt="Slide 2"
            style={{ width: '100%', height: '400px' }}
          />
        </div>
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/02/24/88/07/360_F_224880717_YmNbocwrjak9AyvQ9QrTnELWCeOGtKvH.jpg"
            alt="Slide 3"
            style={{ width: '100%', height: '400px' }}
          />
        </div>
      </Carousel>
      <Row gutter={16} style={{ marginTop: '24px' }}>
        <Col span={8}>
        <center><Title level={4}>New Arrivals</Title>
          <Text>Check out the latest products in our store</Text>
          <br/>
          </center>
        </Col>
        <Col span={8}>
        <center><Title level={4}>Best Sellers</Title>
          <Text>See what's popular in our store</Text>
          <br/>
          </center>
        </Col>
        <Col span={8}>
          <center><Title level={4}>Deals & Offers</Title>
          <Text>Take advantage of our special offers</Text>
          <br/>
          </center>
        </Col>
      </Row>
<br/>
<br/>
<br/>
<br/>
<br/>
      <center><Link to="/product"><Button type='text'><center>Shop Now</center></Button></Link></center>
    </div>
  </>
);

export default GetStarted;