import React from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../Custom-Button/CustomButton";
import { addItem } from "../../redux/Cart/cart-actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                add to cart
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
