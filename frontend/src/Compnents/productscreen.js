import React, { useEffect, useState } from "react";
import { ListGroup, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import "../home.css";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "./loader";
import Message from "./message";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, Product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, []);

  const AddToCartHandler = () => {
    Navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <div className="Prostructure ">
      <Button variant="outline-info">
        <Link className="my-5 mx-5" to="/">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>Go Back
        </Link>
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>
          <Message />
        </h1>
      ) : (
        <Row className="my-5 ">
          <Col md={6}>
            <img src={Product.image} alt={Product.image} />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{Product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <h3>
                  <Rating
                    value={Product.rating}
                    text={`${Product.numReviews} reviews`}
                    color={"#fcb900"}
                  />
                </h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <h3>Price:</h3>
                  </Col>
                  <Col>
                    <h3>{Product.price}$</h3>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <h4>DISCRIPTION:{Product.discription}</h4>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>Brand</h4>
                  </Col>
                  <Col>
                    <h4>{Product.brand}</h4>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Col>
                  <h4>Status:</h4>
                </Col>
                <Col>
                  <h2>
                    {Product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </h2>
                </Col>
              </ListGroup.Item>

              {Product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h3>Qty</h3>
                    </Col>

                    <Col xs="auto" className="my-1">
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(Product.countInStock).keys()].map((x) => (
                          // here we use array constructor and in brackets the number of stocks in products
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item variant="flush">
                <Button
                  type="button"
                  onClick={AddToCartHandler}
                  disabled={Product.countInStock === 0}
                  variant="dark"
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;
