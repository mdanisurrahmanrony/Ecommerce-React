import React from "react";
import "./Shop.styles.scss";
import CollectionOverview from "../../Component/Collection-Overview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/CollectionPage";

const Shop = ({ match }) => {
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
};

export default Shop;
