import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


const SoldReviews = (props) => {
  const [products, setProduct] = useState(null);
  const { id } = useParams();
 

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <Sidebar>
    <div>
      <Link to="/">Back to Product List</Link>
      {products.map((product, key) =>
        <div style={styles.cardContainer}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>{product.name}</h3>
          </div>
          <p style={styles.cardDescription}>{product.description}</p>
          <div style={styles.cardFooter}>
            <div style={styles.soldContainer}>
              <p style={styles.soldLabel}>Sold:</p>
              <p style={styles.soldValue}>{product.sold}</p>
            </div>
            <div style={styles.reviewContainer}>
              <p style={styles.reviewLabel}>Reviews:</p>
              <p style={styles.reviewValue}>{product.reviews}</p>
            </div>
          </div>
        </div>
      )  (
        <p>Loading product details...</p>
      )}
    </div></Sidebar>
  );
};

const styles = {
  cardContainer: {
    border: '1px solid gray',
    borderRadius: 5,
    padding: 10,
    width: 300,
  },
  cardHeader: {
    borderBottom: '1px solid gray',
    paddingBottom: 5,
  },
  cardTitle: {
    margin: 0,
  },
  cardDescription: {
    marginTop: 10,
  },
  cardFooter: {
    display: 'flex',
    marginTop: 10,
  },
  soldContainer: {
    flex: 1,
  },
  soldLabel: {
    fontWeight: 'bold',
  },
  reviewContainer: {
    flex: 1,
    textAlign: 'right',
  },
  reviewLabel: {
    fontWeight: 'bold',
  },
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SoldReviews);

