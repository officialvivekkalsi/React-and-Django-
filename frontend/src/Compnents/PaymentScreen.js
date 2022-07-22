import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { saveShippingAddress } from "../actions/cartActions";
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from "./CheckoutSteps";
import "../home.css";
import LoginFormContainer from "../container/loginFormContainer";

function PaymentScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  if (!shippingAddress.address) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    navigate("/placeorder");
  };

  return (
    <div >
      <LoginFormContainer>
        <CheckoutSteps step1 step2 step3 />
        <Form className="Subtotal" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label><h3> Select Payment Method </h3></Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Paypal or Credit Card"
                id="Paypal"
                name="paymentMethod"

                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button type='submit' variant = 'primary'>Continue</Button>
        </Form>

      </LoginFormContainer>
    </div>
  );
}

export default PaymentScreen;
