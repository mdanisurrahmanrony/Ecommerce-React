import React from "react";
import "./HomePage.styles.scss";
import DirectoryMenu from "../../Component/Directory-Menu/Directory-Menu.component";

const HomePage = () => {
    return (
        <div className="homepage">
            <DirectoryMenu />
        </div>
    );
};

export default HomePage;
