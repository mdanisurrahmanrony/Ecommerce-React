import React from "react";
import "./SignIn.styles.scss";
import { useState } from "react";
import FomrInput from "../Fomr-Input/FormInput.component";
import CustomButton from "../Custom-Button/CustomButton";
import { signInWithGoogle, auth } from "../../Firebase/Firebase.utils";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail("");
            setPassword("");
        } catch (err) {
            console.log("error in sign in: ", err.message);
        }
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    };
    return (
        <div className="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FomrInput
                    type="text"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />

                <FomrInput
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    handleChange={handleChange}
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In with google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
