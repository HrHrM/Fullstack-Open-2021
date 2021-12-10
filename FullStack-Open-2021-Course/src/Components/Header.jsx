import React from "react"

const Header = ({course}) => {
    console.log('Initialized header')
    return(
        <>
            <h1> {course} </h1>
        </>
    )
}

export default Header