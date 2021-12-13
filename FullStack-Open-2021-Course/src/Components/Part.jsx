import React from "react"

const Part = ({ part }) => {

    console.log('Initialized "Part" component inside Content')
    console.log(part)

    return(
        <>
            <p>
                {part.name} {part.exercises}
            </p>
        </>
    )
}
export default Part