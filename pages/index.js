import React, { useEffect } from 'react';
import axios from 'axios';

function Home({ products }) {
  console.log('products', products);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // }

  return <>Home</>;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
};

export default Home;