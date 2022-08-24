import React from "react";
import './signup.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Signup() {

    const [emailerr, setemailerr] = useState("");
    const [passworderr, setpassworderr] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const Navigate = useNavigate();


    const handleChange = (e, name) => {
        const user = {};
        user[name] = e.target.value;
        switch (name) {
            case "firstmail":
                if (user.firstmail.length <= 4) {
                    setemailerr("enter correct email");
                    setEmail(user.firstmail);
                }
                else {
                    setemailerr(" ");
                    setEmail(user.firstmail);
                }
            default: break;
        }
    }


    const handlepass = (e, name) => {
        const user = {};
        user[name] = e.target.value;
        switch (name) {
            case "firstpass":
                if (user.firstpass.length <= 4) {
                    setpassworderr("enter correct password");
                    setpassword(user.firstpass);
                }
                else {
                    setpassworderr(" ");
                    setpassword(user.firstpass);
                }
            default: break;
        }
    }


    const submit = () => {
        if (Email == "") {
            setemailerr("information required !!");
        }
        else if (password == " ") {
            setpassworderr("password required!!");
        }
        else {
            let item = { Email, password };
            console.log(item);
            axios.post("https://reqres.in/api/login", {
                email: Email,
                password: password,
            })
                .then(result => {
                    console.log(result.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }


    return (
        <>
            <div className="main-container">
                <div className="main-container-child1">
                    <div className="child1-container1">
                        SIGN UP
                    </div>
                    <div className="child1-container2">
                        <div className="container2-mail">
                            <div className="mail-text">
                                <input type="text" className="input-type" placeholder="E-mail" onChange={(e) => handleChange(e, "firstmail")} name="firstmail" /><br />
                                {emailerr && <small className="text-danger">{emailerr}</small>}
                            </div>
                        </div>
                        <div className="container2-password">
                            <div className="password-type">
                                <input type="password" className="input-password" placeholder="Password" onChange={(e) => handlepass(e, "firstpass")} name="firstpass" /><br />
                                {passworderr && <small className="text-pass">{passworderr}</small>}
                            </div>
                        </div>
                        <div className="container2-submit">
                            <div className="sign-up" onClick={submit}>
                                SIGN UP
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-container">
                    <NavLink className="end-page" to="/login"> Login page</NavLink>
                </div>
            </div>
        </>
    )
}
export default Signup;