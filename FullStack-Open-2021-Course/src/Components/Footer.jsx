import React from "react"

const Footer = ({ parts }) => {

    console.log('Initialized footer')
    console.log(parts)
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises 
    

    return(
        <>
            <h2> 
               number of exercises: {total}
            </h2>
        </>
    )
}

export default Footer