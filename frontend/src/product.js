import React from "react";
import { Card } from "react-bootstrap";
import "./home.css";
import Rating from "./Compnents/Rating";

function Product({ products }) {
  return (
    <Card className="Card" style={{ width: "18rem" }}>
      <a href={`/product/${products._id}`}>
        <Card.Img className="img" variant="top" src={products.image} />
      </a>
      <Card.Body>
      <a href={`/product/${products._id}`}>
        <Card.Title><h4>{products.name}</h4></Card.Title>
      </a>
      <h4><Rating value={products.rating} text={`${products.numReviews} reviews`} color={'#fcdc00'}/></h4>
      <h4>Price:{products.price}$</h4>
      </Card.Body>
    </Card>
  );
}

export default Product;
