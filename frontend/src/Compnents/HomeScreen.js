import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../product";
import "../home.css";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "./loader";
import Message from "./message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, Products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="latestpro">
      <div>Latest Products</div>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>
          <Message />
        </h2>
      ) : (
        <Row>
          {Products.map((productsprop) => (
            <Col key={Products._id} sm={12} md={6} lg={4} xl={3}>
              <Product products={productsprop} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
