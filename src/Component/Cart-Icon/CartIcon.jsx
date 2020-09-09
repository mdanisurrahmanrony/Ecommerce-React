import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggoleCartHidden } from "../../redux/Cart/cart-actions";
import { connect } from "react-redux";
import { cartItemSelectorCount } from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggoleCartHidden, cartTotal }) => {
    return (
        <div className="cart-icon" onClick={toggoleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartTotal}</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggoleCartHidden: () => dispatch(toggoleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
    cartTotal: cartItemSelectorCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
