import React from "react"

const Header = ({ course }) => {

    console.log('Initialized header')
    console.log(course)

    return(
        <>
            <h1> {course} </h1>
        </>
    )
}

export default Header