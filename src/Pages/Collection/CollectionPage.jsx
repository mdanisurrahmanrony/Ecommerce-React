import React from "react";
import "./CollectionPage.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItemComponent from "../../Component/Collection-Item/CollectionItem.component";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title"> {title} </h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItemComponent key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

//dont understand why need to pass state
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
