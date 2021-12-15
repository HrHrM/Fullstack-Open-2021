import React from "react"

const Header = ({ name }) => {

    console.log('Initialized header')
    console.log('Title:', name)

    return(
        <>
            <h1> {name} </h1>
        </>
    )
}

export default Header