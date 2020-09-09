import React from "react";
import "./SignUp.scss";
import { useState } from "react";
import FomrInput from "../Fomr-Input/FormInput.component";
import CustomButton from "../Custom-Button/CustomButton";
import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";

const SignUp = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password Dont match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName });
            setDisplayName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } catch (err) {
            console.log("sign up err ", err.message);
        }
    };
    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === "displayName") {
            setDisplayName(value);
        }
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
        if (name === "confirmPassword") {
            setConfirmPassword(value);
        }
    };
    return (
        <div className="sign-up">
            <h1 className="title">I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FomrInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FomrInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FomrInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FomrInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="confirm Password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
