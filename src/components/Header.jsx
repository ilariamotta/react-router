import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const links = [
        {
            pagina: "Homepage",
            path: "/",
        },
        {
            pagina: "Chi Siamo",
            path: "/about",
        },
        {
            pagina: "Prodotti",
            path: "/prodotti",
        },
    ];

    return (

        <div className="header d-flex justify-content-between align-items-center px-5">
            <Link to="/"><img src="\src\assets\logoholder.png" alt="logo" /></Link>
            <ul className="d-flex justify-content-between gap-5">
                {links.map((link, index) => {
                    return (
                        <li key={index}><NavLink to={link.path} className="links">{link.pagina}</NavLink></li>
                    )
                })}
            </ul>

        </div>


    )
}