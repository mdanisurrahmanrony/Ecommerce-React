import React from "react";
import "./Checkout.scss";
import { createStructuredSelector } from "reselect";
import { selectCartItems, totalPrice } from "../../redux/Cart/cart.selectors";
import { connect } from "react-redux";
import CheckoutItem from "../../Component/Checkout-Item/CheckoutItem";
import StripeCheckoutButton from "../../Component/Stripe/StripeCheckout";

const Checkout = ({ cartItem, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItem.map((item) => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))}
            <div className="total">
                <span>TOTAL: ${total} </span>
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems,
    total: totalPrice,
});

export default connect(mapStateToProps)(Checkout);
