import React, { useEffect } from "react"; //useState,
import { Row, Col, } from "react-bootstrap";
import Product from "../product";
// import axios from 'axios'
import "../home.css";
import { useDispatch, useSelector } from "react-redux";
// import Products from '../Compnents/products'
import { listProducts } from "../actions/productActions";
import Loader from './loader'
import Message from "./message";

const HomeScreen = () => {
  // const [Products,setProducts]= useState([])
  const dispatch = useDispatch();
  // dispatch() is the method used to dispatch actions and trigger state changes to the store
  const productList = useSelector((state) => state.productList);
  // console.log("success", productList);
  const { error, loading, Products } = productList;
  // console.log(Products,'homescreen console');
  useEffect(() => {
    dispatch(listProducts());
    // console.log("useeffect");
    //  async function Fetchdata() {
    //    const {data} = await axios.get('/api/products/')
    //    setProducts(data)
    //  }
    //  Fetchdata()
  }, [dispatch]);

  return (
    <div className="latestpro">
      <div>Latest Products</div>
      {loading ? (
        < Loader/ >
      ) : error ? (
        <h2><Message /></h2>
      ) : (
        <Row>
          {Products.map((productsprop) => (       
            <Col key={Products._id} sm={12} md={6} lg={4} xl={3}>
              {/* {products.name} */}
              <Product products={productsprop} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
