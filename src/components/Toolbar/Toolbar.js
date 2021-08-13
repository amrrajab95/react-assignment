import React from "react";
import Logo from "../Logo/Logo";
import classes from './toolbar.module.css'

const Toolbar = (props)=>(
    <header>
        <div className="container">
            <Logo/>
        </div>

    </header>
);

export default Toolbar