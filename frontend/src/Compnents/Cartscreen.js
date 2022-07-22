import React, { useEffect } from "react";
import "../home.css";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions , removeFromCart } from "../actions/cartActions";
import { Card,ListGroup, Image,Row, Col, Form, Button } from "react-bootstrap";
import Cartmessage from "../Compnents/Cartmessage";

function Cartscreen() {
  const { id } = useParams();
  const location = useLocation();
  const ProductId = id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("cartItems:", cartItems);

  useEffect(() => {
    if (ProductId) {
      dispatch(cartActions(ProductId, qty));
    }
  }, [dispatch, ProductId, qty]);

  const removeFromCartHandler= (id) =>{
    console.log('reomve cart',id)
    dispatch(removeFromCart(id))
  }

  const checkoutHandler=()=>{
    navigate('/login?redirect=shipping')
  }
  return (
    <Row >
    <Col md={8}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <Cartmessage variant="info">
          Your cart is empty <Link to="/">Go Back</Link>
        </Cartmessage>
      ) : (
        <ListGroup variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item key={item.Product}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                  <Link to={`/product/${item.Product}`}>{item.name}</Link>
                </Col>

                <Col md={2}>${item.price}</Col>

                <Col md={3}>
                  <Form.Control
                    as="select"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        cartActions(item.Product, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>

                <Col md={1}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => removeFromCartHandler(item.Product)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Col>

    <Col md={4}>
      <Card variant='flush'>
        <ListGroup >
          <ListGroup.Item>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              //  {/* //accumulator */}
              .toFixed(2)}
          </ListGroup.Item>
        </ListGroup>

        <ListGroup.Item>
          <Button
            type="button"
            className="btn-block"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed To Checkout
          </Button>
        </ListGroup.Item>
      </Card>
    </Col>
  </Row>
  );
}

export default Cartscreen;
