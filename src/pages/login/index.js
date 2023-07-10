import React from "react";


function Login() {

    return (
        <div>
            <h1>Login</h1>

            <form>

            <label>Email:</label>
            <input type="email" />

            <br />

            <label>Password</label>
            <input type="password" />

            <br />

            <input type="submit" />
            </form>
        </div>
    )

}


export default Login;