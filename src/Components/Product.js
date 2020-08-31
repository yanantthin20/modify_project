import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <div className="card-footer">
                  <p className="footer">
                    {title}
                    <br />
                    MMK {price}
                  </p>
                  <button
                    className="btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        in Cart
                      </p>
                    ) : (
                      <ShoppingCart />
                    )}
                  </button>
                </div>
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(0.9);
  }
  .btn {
    position: absolute;
    bottom: 0;
    right: 30px;
    margin: 5px;
    padding: 3px;
    height: 18%;
    border: none;
    cursor: pointer;
    width: 20%;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 30px;
    margin: 5px;
    padding: 3px;
    height: 20%;
    border: none;
  }
`;
