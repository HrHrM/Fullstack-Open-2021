import React from "react"

const Part = ({ part, exercises }) => {
    console.log('Initialized Part component inside Content')
    
    return(
        <>
            <p>
                {part} {exercises}
            </p>
        </>
    )
}
export default Part