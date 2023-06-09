import React from "react";

export default function RegisterForm({repeatPassword, setRepeatPassword}) {
    function handleRepeatPassword(e) {
        setRepeatPassword(e.target.value);
    }

    return(
        <div>
            <form className="login-form">
                <div className="repeat-password">
                    <label className="label-text">Repeat password</label><br></br>
                    <input className="form-field" type="password" name="repeat-password" 
                    onChange={handleRepeatPassword} placeholder="Repeat Password"
                    data-testid="repeat-password"/>
                </div>
            </form>
        </div>
    )
}
