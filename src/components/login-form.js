import React from "react";


export default class LoginForm extends React.Component {
    render() {
        return(
            <div className="container">

                <form className="form mx-auto m-5"> 
                    <h3>log in</h3>

                    <label>Username: <input type="text" placeholder="Username"></input></label> <br />
                    <label>Password: <input type="text" placeholder="Password"></input></label> <br />

                    <button className="btn btn-primary">enter</button>
                </form>

            </div>
        );

    }
}


