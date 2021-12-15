import React from "react"

const Part = ({ name, exercises }) => {

    console.log('Initialized "Part" component inside Content')
    console.log(name, exercises)

    return(
        <>
            <p>
                {name}: {exercises}
            </p>
        </>
    )
}
export default Part