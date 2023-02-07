import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts  } from '../reducers/productSlice';
import { Card, Row, Rate} from 'antd';
import React, { useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Sidebar>
     <Row gutter={16} justify="center" align="middle">
        {products.map((product, key) =>
        <center>
          <Card key={key} style={{ width: 430, height:350, margin: '10px', borderColor: '#e56161' }}>
           <Link to={`/products/${product.id}`}><img src={product.image} className="img-fluid" width={150} height={150} alt={product.name} /></Link> 
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <br></br>
            <Rate/>
            <br></br><br></br>
          </Card></center>
        )}
         </Row>
    </Sidebar>
  );
};

  

export default Product;