import React from "react";
import LoginFormContainer from "../container/loginFormContainer";
import {useNavigate} from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import  CheckoutSteps from './CheckoutSteps'
import "../home.css";


export default function ShippingScreen() {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);


  const ShippingHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address, city, postalCode, country}))
    navigate('/payment')
  };

  return (
    <div >
      <CheckoutSteps step1 step2 />
      <LoginFormContainer>
          <Form onSubmit={ShippingHandler}>
          <h2>Shipping Address</h2>

          <Form.Group controlid="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter your Address"
              value={address ? address : ''}
              // this can be an empty string but this cannot be a 0 or null value
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlid="city">
            <Form.Label>City</Form.Label>
            <Form.Control
            required
              type="city"
              placeholder="Enter your City"
              value={city ? city : ''}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlid="postalCode">
            <Form.Label>Postal Code</Form.Label>

            <Form.Control
             required
              type="postalCode"
              placeholder="Enter your PostalCode"
              value={postalCode ? postalCode : ''}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlid="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              type="Country"
              placeholder="Enter your country"
              value={country ? country : ''}
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit">Continue</Button>
        </Form>
      </LoginFormContainer>
    </div>
  );
}
