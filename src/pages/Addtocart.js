import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Button, Modal } from 'antd';
import { FaShoppingCart } from "react-icons/fa";
import { removeFromCart, clearCart, addToCart, decreaseCart, getTotals, } from '../reducers/productSlice';
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, Box } from '@chakra-ui/react';
import {
  BsFillCartPlusFill
} from "react-icons/bs";

const Addtocart = (props) => {
  const { cart } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const showModal = product => {
    setVisible(true);
    setCurrentProduct(product);
  };

  const handleOk = () => {
    setVisible(false);
    dispatch(removeFromCart(currentProduct.id));
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Sidebar>
      <>
        <h1> <BsFillCartPlusFill /> Shopping Cart  ( {cart.length} Items)</h1>
        <br />
        <div style={styles.rightAlignedbuttons}>
          <Button style={styles.button} onClick={() => dispatch(clearCart())}>
            <FaShoppingCart /> &nbsp; Clear Cart
          </Button></div>
        <br></br> <br></br>
        <Row gutter={16}>
          <br />
          {cart.map(product => (
            <Col key={product.id} span={8}>
              <Card cover={<img alt={product.time} src={product.image} width={30} height={350} />}
                actions={[
                  <Button
                    style={styles.button}
                    onClick={() => showModal(product)}
                  >
                    Remove
                  </Button>,
                  <Button
                    style={styles.button}
                    onClick={handleCheckout}
                    disabled={loading}
                  >
                    {loading ? 'Checking out...' : 'Checkout'}
                  </Button>
                ]}
              >
                <Card.Meta title={product.title} description={product.price} />
              </Card>
              <div>
                <center>

                  <Button onClick={() => handleDecreaseCart(product)}>
                    -
                  </Button>
                  &nbsp; {product.cartQuantity}  &nbsp;
                  <Button onClick={() => handleAddToCart(product)}>+</Button>
                </center>
                <br />
                <center>
                  <Box>
                    <Text fontWeight="800">Cart Summary</Text>
                    <br />
                  </Box>
                  <Text fontWeight="600">Total Products:{product.cartQuantity}</Text>
                  <Text fontweight="600">
                    {" "}
                    Amount to be paid: ${product.price * product.cartQuantity}
                  </Text></center>

              </div>
            </Col>
          ))}
        </Row>
        <Modal
          visible={visible}
          title="Confirm"
          onOk={handleOk}
          onCancel={handleCancel}>
          <p>Do you want to remove {currentProduct.name} from your cart?</p>
        </Modal>
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