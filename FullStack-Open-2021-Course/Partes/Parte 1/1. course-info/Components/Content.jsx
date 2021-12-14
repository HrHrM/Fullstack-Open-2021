import React from "react"
import Part  from './Part'

const Content = ({parts}) => {

    console.log('Initialized Content')
    console.log(parts)

    return(
        <>
            <Part name = {parts[0].name} key = {parts.name} exercises = {parts[0].exercises} />
            <Part name = {parts[1].name} key = {parts.name} exercises = {parts[1].exercises} />
            <Part name = {parts[2].name} key = {parts.name} exercises = {parts[2].exercises} />
        </>
    )
}

export default Content



// const Content = ({parts}) => {

//     console.log('Initialized Content')
//     console.log(parts)
//     const mapped = parts.map(e => {
//         return(
//             <Part part = {e} key={e.name} />
//         )
//     })


//     return(
//         <>
//             {mapped}
//         </>
//     )
// }

// export default Content