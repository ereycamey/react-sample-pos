import { useParams } from "react-router-dom";
import axios from 'axios'
import Card from 'antd/es/card/Card';
import { Button } from 'antd';
import { addToCart } from '../reducers/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { Spin, Space } from "antd";
import { fetchProducts, decreaseCart, getTotals } from '../reducers/productSlice';
import React, { useEffect } from 'react';

function ViewProduct({ onSave}) {
  let { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [quantity, setQuantity] = React.useState(0);
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector(state => state.products);
  
  
  const handleDecreaseCart = (product) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(decreaseCart(product));
    }
  };
  
  const handleAddToCart = (product) => {
    setQuantity(quantity + 1);
    dispatch(addToCart(product));
   
  };

  const handleSave = () => {
    onSave({
      product,
      quantity
    });
  };

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      });
  }, [id]);


  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) {
    return <div>
      <br/><Space direction="vertical" style={{ width: '100%' }}>
        <br/>
        <br/>
      <Spin tip="Loading" size="large">
    <div className="content" />
  </Spin></Space></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
      <center>
<Button  onClick={() => handleDecreaseCart(product)}> - </Button>
 &nbsp; {quantity} &nbsp;
<Button onClick={() => handleAddToCart(product)}> + </Button>
                </center>
                <br/>
      <center>
      <Button style={styles.button} onClick={handleSave}>Add to Cart</Button></center> </Card>
      </center>
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