import React from 'react'
import {Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Messages() {
  return (
    <div><>
    {[
           'danger',
     ].map((variant) => (
      <Alert key={variant} variant={variant}>
       404 Not Found <Link to="/">Go Back</Link>
      </Alert>
    ))}
  </></div>
  )
}
export default Messages


