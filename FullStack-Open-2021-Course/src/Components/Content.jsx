import React from "react"
import Part  from './Part'

const Content = ({parts}) => {

    console.log('Initialized Content')
    console.log(parts)
    const mapped = parts.map(e => {
        return(
            <Part part = {e} key={e.name} />
        )
    })


    return(
        <>
            {mapped}
        </>
    )
}

export default Content