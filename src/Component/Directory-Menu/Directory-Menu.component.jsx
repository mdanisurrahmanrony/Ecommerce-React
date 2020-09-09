import React from "react";
import "./Directory-Menu.styles.scss";
import { fakeData } from "../../Data/Data";
import MenuItem from "../Menu-Item/Menu-Item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const DirectoryMenu = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
                <MenuItem
                    title={title}
                    id={id}
                    imageUrl={imageUrl}
                    size={size}
                    linkUrl={linkUrl}
                />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
