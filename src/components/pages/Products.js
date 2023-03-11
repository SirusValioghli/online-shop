import React, { Component } from "react";
import axios from "axios";
import Card from "../Card.js";
import styles from "./Products.module.css";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) =>
      this.setState({
        products: res.data,
      })
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.title}
              cost={`${product.price} $`}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default Products;
