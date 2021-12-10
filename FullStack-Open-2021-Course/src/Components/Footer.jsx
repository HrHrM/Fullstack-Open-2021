import React from "react"

const Footer = (props) => {
    console.log('Initialized footer')
    return(
        <>
            <h2>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</h2>
        </>
    )
}

export default Footer