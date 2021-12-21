import { useState } from 'react'
import './App.css'
import Course       from './Components/Course'


const App = () => {

  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  const mapped = course.map(e => {
    return(
      <Course key = {e.id} course = {e} />
    )
  })

  return (
    <div>
      {mapped}
    </div>
  )
}

export default App

//----------------------App base Parte 2----------------------
// const App = () => {

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }


//   return (
//     <div>
//       <Header course = {course.name} />
//       <Content parts = {course.parts} />
//       <Footer parts = {course.parts} /> 
//     </div>
//   )
// }

// export default App

//---------------------Notes----------------------

// const App = ({notes}) => {
  
//   const mapped = notes.map(e => {
//     return(
//       <Notes key={e.id} note = {e} />
//     )
//   })

//   return(
//     <div>
//       <h1> Notes </h1>
//       <ul>
//         {mapped}
//       </ul>
//     </div>
//   )
// }

// export default App

// const Notes = ({ note }) => {
//   return <li> {note.content} </li>
// }

