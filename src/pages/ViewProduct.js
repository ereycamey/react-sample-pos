import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Card from 'antd/es/card/Card';
import { Button } from 'antd';
import { addToCart } from '../reducers/productSlice';
import { useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { Modal } from "antd";

function ViewProduct() {
  let { id } = useParams();
  const [product, setProduct] = React.useState({});
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      });
  }, [id]);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
    setVisible(true);
  };
  
  const handleOk = e => {
    setVisible(false);
  };

  return (
    <Sidebar>
    <div>
      <br/>
      <br/>
      <center><img src={product.image} className="img-fluid" width={400} height={400} alt={product.name} /></center>
      <br/>
      <center><Card style={{ width: 600, height:350, margin: '10px', borderColor: '#red' }}><h2>{product.title}</h2>
      <h3>Price: {product.price}</h3>
      <h4>Category: {product.category}</h4>
      <br/>
      <h5>Description:</h5> <p>{product.description}</p>
      <br/>
      <br/>
      <center>
      <Button style={styles.button}onClick={() => handleAddToCart(product)}> Add to Cart </Button></center> </Card>
      </center>
      <div>
      <Modal
        title="Product added to cart"
        visible={visible}
        onOk={handleOk}
        footer={[
            <Button style={styles.button} key="ok" type="primary" onClick={handleOk}> OK </Button>
        ]}>
        <p>{`${product.title} has been added to your cart.`}</p>
      </Modal>
    </div>
    </div>
</Sidebar>
  )
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

export default ViewProduct;