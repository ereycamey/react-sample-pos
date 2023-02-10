import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Button } from 'antd';
import { FaShoppingCart} from "react-icons/fa";
import { removeFromCart, clearCart, addToCart,  decreaseCart,
    getTotals, } from '../reducers/productSlice';
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from 'react';
import axios from 'axios';
const Addtocart = (props) => {

    const { cart } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const [loading, setLoading] = useState(false);

    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
      };
      const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };

      useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);
    

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const order = { props };
      const response = await axios.post('/api/orders', order);

      // Handle the response from the server
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

function increment() {
   
  setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

    return (
        <Sidebar>
                  <>
                  <h1> Shopping Cart </h1>
                  <br/>
                  <div style={styles.rightAlignedbuttons}>
                  <Button style={styles.button} onClick={() => dispatch(clearCart())}>
                  <FaShoppingCart/> &nbsp; Clear Cart
      </Button></div>
      <br></br> <br></br>
      <Row gutter={16}>
        <br/>
        {cart.map(product => (
          <Col key={product.id} span={8}>
            <Card cover={<img alt={product.time}  src={product.image} width={30} height={350}/>}
              actions={[
                <Button style={styles.button}
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </Button>,  <Button style={styles.button} onClick={handleCheckout} disabled={loading}>
      {loading ? 'Checking out...' : 'Checkout'}
    </Button>
              ]}
            >
              <Card.Meta title={product.title} description={product.price}/>
            </Card>
            <div>
            <center>
          
                  <div className="cart-product-quantity">
                    <Button col-md-3 style={styles.button} onClick={() => handleDecreaseCart(product)}>
                      -
                    </Button>
                    <div className="count">{product.cartQuantity}</div>
                    <Button style={styles.button} onClick={() => handleAddToCart(product)}>+</Button>
                  </div>
             
                  <div className="cart-product-total-price">Total:
                    ${product.price * product.cartQuantity}
                  </div>
                  </center>
    </div>
          </Col>
        ))}
      </Row>
    </>
        </Sidebar>
    );
}

const styles = {

    rightAlignedbuttons: {
    textAlign: 'right'
  },
    button: {
      backgroundColor: '#f34343',
      color: 'white',
      height: '50px',
      width: '125px',
      fontSize: '13px',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      alignItems: 'right'
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