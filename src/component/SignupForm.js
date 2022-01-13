import React from "react";

const SignupForm = () => {
    const handleFormSubmit = (event) =>{
        event.preventDefault();
    }

    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    
                    <div className="name">
                        <label className="label">Full Name</label>
                        <input className="input" type="text" name="fullname" />
                    </div>

                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email"  name="email" />
                    </div>

                    <div className="password">
                        <label className="label">password</label>
                        <input className="input" type="password" name="password" />
                    </div>

                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign up</button>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default SignupForm