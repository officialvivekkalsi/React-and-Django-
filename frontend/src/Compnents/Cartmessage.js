import React from 'react'
import { Alert } from 'react-bootstrap';

function Cartmessage() {
  return (
    
    <>
      {[
        
        'info',
              ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Your cart is Empty
          <Alert.Link href="/">Go Back </Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </>
  );
}

export default Cartmessage