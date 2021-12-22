import React from "react";

const Button = ({countryShow, setShow, name}) => {

    const handleButton = () => {
        let changeShow = {...countryShow}
        changeShow[name] = !countryShow[name]
        setShow(changeShow)
    }

    return(
        <button onClick={handleButton} >
            {
                !countryShow[name] &&
                'show'
            }
            {
                countryShow[name] &&
                'dont show'
            }
        </button>
    )
}

export default Button