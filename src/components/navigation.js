import React from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import LoginForm from './login-form';



export default class Navigation extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <ul className="nav">
                    <li><Home /></li>
                    <li><About /></li>
                    <li><Contact /></li>
                </ul>

                <div>
                    <LoginForm />
                </div>
            </div>
        );
    }
  }

