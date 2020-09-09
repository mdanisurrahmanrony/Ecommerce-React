import React from "react";
import "./CollectionOverview.scss";
import CollectionPreview from "../CollectionPreview/Collection.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...othersData }) => (
                <CollectionPreview key={id} {...othersData} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
