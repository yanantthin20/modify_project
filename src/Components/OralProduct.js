import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-4">
          <div className="container">
            <Title name="Oral " title=" Products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return product.id > 8 ? (
                      <Product key={product.id} product={product} />
                    ) : (
                      <i />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
