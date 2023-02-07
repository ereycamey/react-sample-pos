import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Button } from 'antd';
import {
    FaShoppingCart
} from "react-icons/fa";
import { removeFromCart, clearCart } from '../reducers/productSlice';
import Sidebar from "../components/Sidebar";

const Addtocart = () => {

    const { cart } = useSelector(state => state.products);
    const dispatch = useDispatch();


    return (
        <Sidebar>
                  <>
                  <Button style={styles.button} onClick={() => dispatch(clearCart())}>
                  <FaShoppingCart/> &nbsp; Clear Cart
      </Button>
      <br></br> <br></br>
      <Row gutter={16}>
        {cart.map(product => (
          <Col key={product.id} span={8}>
            <Card
              cover={<img alt={product.time}  src={product.image} width={30} height={350}/>}
              
              actions={[
                <Button style={styles.button}
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </Button>,
              ]}
            >
              <Card.Meta title={product.title} description={product.price}/>
            </Card>
          </Col>
        ))}
      </Row>

     
    </>

        </Sidebar>
    );
}

const styles = {
    button: {
      backgroundColor: '#f34343',
      color: 'white',
      height: '55px',
      width: '150px',
      fontSize: '15px',
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
  

export default Addtocart;