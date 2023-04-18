import React from "react";

export default function RegisterForm({repeatPassword, setRepeatPassword}) {
    function handleRepeatPassword(e) {
        setRepeatPassword(e.target.value);
    }

    return(
        <div>
            <form className="login-form">
                <div className="repeat-password">
                    <input type="password" name="repeat-password" 
                    onChange={handleRepeatPassword}
                    placeholder="Repeat Password"/>
                </div>
            </form>
        </div>
    )
}
