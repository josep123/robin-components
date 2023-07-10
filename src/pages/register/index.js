import React from "react";


function Register() {

    return(

        <div>

            <h1>Register</h1>

            <form>
                <label>Nombre completo:</label>
                <input type="text" name="full name" />
                <br />
                <label>Email</label>
                <input type="email" name="email" />
                <br />
                <label> Password</label>
                <input type="password" name="password" />
                <br />
                <input type="submit" name="Enviar" />



            </form>

        </div>

    )
}

export default Register;