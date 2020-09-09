import React from "react";
import "./CustomButton.scss";
import { signInWithGoogle } from "../../Firebase/Firebase.utils";

const CustomButton = ({
    children,
    inverted,
    isGoogleSignIn,
    ...otherProps
}) => {
    return (
        <button
            className={`${inverted ? "inverted" : ""}${
                isGoogleSignIn ? "sign-in-with-google" : ""
            } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
