import React from "react";
import "./SigninAndSignup.styles.scss";
import SignIn from "../../Component/SignIn/SignIn.component";
import SignUp from "../../Component/SignUp/SignUp";

const SigninAndSignup = () => {
    return (
        <div className="signin-and-signup">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SigninAndSignup;
