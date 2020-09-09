import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../Custom-Button/CustomButton";
import { connect } from "react-redux";
import CartItem from "../Cart-Item/CartItem";
import { selectCartItems } from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggoleCartHidden } from "../../redux/Cart/cart-actions";

const CartDropdown = ({ cartItem, history, dispatch }) => {
    console.log(cartItem.lenght);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItem.length ? (
                    cartItem.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <span className="empty-cart">Cart is Emplty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push("/checkout");
                    dispatch(toggoleCartHidden());
                }}
            >
                Checkout
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
