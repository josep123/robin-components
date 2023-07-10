import React from "react";

function TopMenu() {

    return(
       <nav className="topMenu">
           <p> <a href="/login">Login |</a> <a href="/register">Register |</a> <a href="/panel">Panel </a></p>
       </nav>
    )
}

export default TopMenu;