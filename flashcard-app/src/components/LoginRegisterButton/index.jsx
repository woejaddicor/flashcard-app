import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

export default function LoginRegisterButton({buttonText, handleLogin}) {

    return(
        <div>
            <button className="log-reg-button" type="submit"
            onClick={handleLogin} data-testid="log-reg-button">
            {buttonText}</button>
        </div>
    )
}