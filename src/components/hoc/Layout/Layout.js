import React from "react";
import Wrap from "../Wrap/Wrap";
import Logo from "../../Logo/Logo";
import Toolbar from "../../Toolbar/Toolbar";
import classes from './layout.module.css'
const Layout = (props)=>{

    return (
        <Wrap>
        <Toolbar/>
        <main className="container">
            {props.children}
        </main>
        </Wrap>
    )
}
export default Layout;