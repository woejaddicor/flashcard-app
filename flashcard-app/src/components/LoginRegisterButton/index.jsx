import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

export default function LoginRegisterButton({buttonText, handleLogin}) {

    return(
        <div>
            <button className="log-reg-button" type="submit"
            onClick={handleLogin}>{buttonText}</button>
        </div>
    )

}