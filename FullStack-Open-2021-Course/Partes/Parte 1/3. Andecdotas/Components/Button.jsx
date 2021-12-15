import React from "react";

const Button = ({ text, handler }) => {
    return(
        <>
            <button onClick={handler} >
                {text}
            </button>
        </>
    )
}
export default Button