import React, { useState } from "react";
import LoginRegisterButton from "../LoginRegisterButton";

export default function RegisterForm({repeatPassword, setRepeatPassword}) {

    function handleRepeatPassword(e) {
        //console.log(e.target.value)
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