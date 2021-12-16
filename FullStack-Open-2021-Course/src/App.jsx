import { useState } from 'react'
import logo         from './logo.svg'
import './App.css'

const App = ({notes}) => {
  
  const mapped = notes.map(e => {
    return(
      <Notes key={e.id} note = {e} />
    )
  })

  return(
    <div>
      <h1> Notes </h1>
      <ul>
        {mapped}
      </ul>
    </div>
  )
}

export default App

const Notes = ({ note }) => {
  return <li> {note.content} </li>
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

