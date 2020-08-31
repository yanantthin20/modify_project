import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";
export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <a href="javascript:javascript:history.go(-1)">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-3"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </a>
            <br />
            <Link to="/checkout">
              <button
                className="btn btn-outline-danger  text-uppercase mb-3 px-3 "
                type="button"
              >
                Check out
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>MMK {cartSubTotal}</strong>
            </h5>

            <h5>
              <span className="text-title"> Tax :</span>
              <strong>MMK {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title"> Total :</span>
              <strong>MMK {cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}