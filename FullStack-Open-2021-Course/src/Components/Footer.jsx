import React from "react"

const Footer = ({ parts }) => {

    console.log('Initialized footer')
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
    console.log('The sum of the exercises in the footer is', total) 
    

    return(
        <>
            <h2> 
               number of exercises: {total}
            </h2>
        </>
    )
}

export default Footer