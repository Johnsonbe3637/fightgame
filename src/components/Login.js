import React, { useState } from 'react'; 
import Axios from "axios";
import Cookies from "universal-cookie";

function Login({setIsAuth}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const cookies = new Cookies();
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username,
            password,
        }).then((res) => {
            const { firstName, lastName, username, token, userId } = res.data;
            Cookies.set("token", token);
            Cookies.set("userId", userId);
            Cookies.set("username", username);
            Cookies.set("firstName", firstName);
            Cookies.set("lastName", lastName);
            setIsAuth(true);
        });
    };
    return (
        <div classname="login">
            <label>Login</label>
            <input 
            placeholder="Username" 
            onChange={(event) => {
                setUsername(event.target.value);
            }} 
            />
            <input 
            placeholder="Password"
            type="password" 
            onChange={(event) => {
                setPassword(event.target.value);
            }} 
            />
            <button onClick={login}> Login</button>
        </div>
    )
}

export default Login