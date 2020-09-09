import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItem
);

export const cartItemSelectorCount = createSelector(
    [selectCartItems],
    (cartItem) => cartItem.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const totalPrice = createSelector([selectCartItems], (cartItem) =>
    cartItem.reduce((total, item) => total + item.quantity * item.price, 0)
);
