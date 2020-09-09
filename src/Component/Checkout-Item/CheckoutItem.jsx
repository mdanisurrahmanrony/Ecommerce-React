import React from "react";
import "./ChcekoutItem.scss";
import {
    clearCartItem,
    addItem,
    removeItem,
} from "../../redux/Cart/cart-actions";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearCart, addItem, removeItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name"> {name} </span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price"> {price} </span>
            <div className="remove-button" onClick={() => clearCart(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearCart: (item) => dispatch(clearCartItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
