import React, { useEffect, useRef } from 'react';
import './style.scss';
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { LoginComics } from './../../../api/user';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext'
import { Link, useHistory } from "react-router-dom";
function LoginAdmin(props) {
    const userRef = useRef("");
    let history = useHistory();
    const { login ,isLoggedIn} = React.useContext(AuthContext);
    const passRef = useRef("");
    const LoginUserAction = async (e) => {
        e.preventDefault();
        const user = {
            email:userRef.current.value,
            password: passRef.current.value
        }
        let data = await LoginComics(user);
        if (data?.data?.token_type === "bearer") {
            let token = data?.data?.access_token
            let userInfor = data?.data?.user
            login(token, userInfor)
            toast.success(`Xin chào ${userInfor.name}`,)
            history.push("/admin");
        } else {
            toast.error("Vui Lòng kiểm tra Email hoặc Mật khẩu",)
        }
    }
    useEffect(() => {
        if(isLoggedIn){
            history.push("/admin")
        }
    }, [isLoggedIn])
    return (
        <div className="contain-login">
            <div className="login-content">
                <form onSubmit={LoginUserAction}>
                    <h2 className="title">Login</h2>
                    <div className="input-div one">
                        <div className="i">
                            <AiOutlineUser className="fas fa-user"></AiOutlineUser>
                        </div>
                        <div className="div">
                            <h5>Username</h5>
                            <input type="text" className="input" ref={userRef} />
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <AiFillLock className="fas fa-lock"></AiFillLock>
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <input type="password" className="input" ref={passRef} />
                        </div>
                    </div>
                    <a href="#">Forgot Password?</a>
                    <input type="submit" className="btnLogin" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;