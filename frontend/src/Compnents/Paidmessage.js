import React from 'react'
import {Alert} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
function Paidmessage({variant,children}) {
      return (
          <Alert variant={variant}>
              {children}
          </Alert>
      )
}

export default Paidmessage