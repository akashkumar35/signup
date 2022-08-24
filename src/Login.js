import React from "react";
import './login.scss';
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const [name, setname] = useState("");
    const[loginpass,setloginpass]=useState("");
    const[nameerr,setnameerr] = useState("");
    const[passerr,setpasserr] = useState("");
    const Navigate = useNavigate();


    const handleChange =(e,name)=>{
        const user={};
        user[name] = e.target.value;
        switch (name) {
            case "firstname":
                if (user.firstname.length <= 4) {
                    setnameerr("enter correct name");
                    setname(user.firstname);
                }
                else {
                    setnameerr(" ");
                    setname(user.firstmail);
                }
            default: break;
        }
    }

    const handlepassword =(e,name)=>{
        const user={};
        user[name] = e.target.value;
        switch (name) {
            case "firstpass":
                if (user.firstpass.length <= 4) {
                    setpasserr("enter correct password");
                    setloginpass(user.firstname);
                }
                else {
                    setpasserr(" ");
                    setloginpass(user.firstmail);
                }
            default: break;
        }
    }


    const handlelogin=()=>{
        if (name == "") {
            setnameerr("enter your name!!");
        }
        else if (loginpass == "123") {
            Navigate("/home");
        }
        else {
            setpasserr("incorrect password!!");
        }
    }

  

    return (
        <>
            <div className="parent-component">
                <div className="child-component">
                    <div className="login-child1">
                        Login
                    </div>
                    <div className="login-child2">
                        <div className="login-child2-child1">
                            <div className="name-login">
                                <input type="text" placeholder="Name" className="login-name" onChange={(e) => handleChange(e, "firstname")} name="firstname" /><br />
                                {nameerr && <small className="text-danger">{nameerr}</small>}
                            </div>
                        </div>
                        <div className="login-child2-child2">
                              <div className="password-login">
                              <input type="password" placeholder="Password" className="login-password" onChange={(e) => handlepassword(e, "firstpass")} name="firstpass" /><br />
                              {passerr && <small className="text-danger">{passerr}</small>}
                              </div>
                        </div>
                        <div className="login-child2-child3">
                            <div className="child3-login" onClick={handlelogin}>
                                Login
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;