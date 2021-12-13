import React from "react"

const Footer = ({ parts }) => {

    let sum
    console.log('Initialized footer')
    console.log(parts)
    const mapped = parts.map(e => { 
        sum = sum + e.exercises
        return sum 
    })
    console.log(sum)
    
    return(
        <>
            <h2>Number of exercises {sum}</h2>
        </>
    )
}

export default Footer