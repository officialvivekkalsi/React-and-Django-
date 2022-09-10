import React from 'react'
import {Alert} from 'react-bootstrap'
function Paidmessage({variant,children}) {
      return (
          <Alert variant={variant}>
              {children}
          </Alert>
      )
}

export default Paidmessage