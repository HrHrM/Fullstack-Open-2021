import React, { useState } from 'react'
import './App.css'
import Button              from './Components/Button'
import Anecdote            from './Components/Anecdote'


const App = ({ anecdotes }) => {

  const [ selected, setSelected ] = useState(0)
  const [ votes, setVotes ]       = useState(Array(anecdotes.length).fill(0))

  const votes_copy = [...votes]
  votes_copy[selected] += 1
  const indexOfMax = votes.indexOf(Math.max(...votes))

  const handleRandom = () => {
    console.log(anecdotes[selected])
    return(
      setSelected( Math.floor(Math.random()* anecdotes.length)  )      
    )
  }
  const handleVotes = () => {
    setVotes(votes_copy)
  }

  return(
    <div>
      <Anecdote name = {'Anecdote of the day'} anecdote={anecdotes[selected]} vote = {votes[selected]} />

      <div>
        <Button text = {'vote'} handler = {handleVotes} />
        <Button text = {'Next anecdote'} handler = {handleRandom} />
      </div>
    
      <Anecdote name = {'The most voted anecdote is'} anecdote={anecdotes[indexOfMax]} vote = {votes[indexOfMax]} />
    </div>
  )
}

export default App


//------------------Codigo Base de la aplicacion----------------------------

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App



//------------------Aplicación de prueba------------------------
// const Hello = (props) => {
//   console.log(`${props.name} added with Home component`)
//   return(
//     <div>
//       <p>Hello, {props.name}, your age is {props.age} old </p>
//     </div>
//   )
// }

// const Footer = () => {
//   console.log('footer initialized')
//   return(
//     <div>
//       Greetings, App created by <a href='https://github.com/HrHrM'>Johnny Bohorquez</a>
//     </div>
//   )
// }

// const App = () => {
  
//   console.log('Initialized phos')
//   const now = new Date()
//   console.log(now)
//   const a = 10
//   const b = 20
//   console.log(`The total is ${a + b}`)
//   const name = 'Antarc'
//   const age  = 40

//   return (
//     <>
//       <p>
//         Phosphophyllite, it is now {now.toDateString()} 
//       </p>
//       <p>
//         {a} plus {b} is equal to {a + b}
//       </p>
//       <Hello name = 'Shinsha'  age = {26 + 10} />
//       <Hello name = {name}     age = {age} />
//       <Footer />
//     </>

//   )
// }

// export default App

//------------------------Ejemplos de hooks---------------------------------------
// const App = () => {

//   const [ left, setLeft ]     = useState(0)
//   const [ right, setRight ]   = useState(0)
//   const [ allClicks, setAll ] = useState([])

//   const handleLeft  = () => { 
//     setLeft(left + 1) 
//     setAll(allClicks.concat('L'))
//   }
//   const handleRight = () => { 
//     setRight(right + 1) 
//     setAll(allClicks.concat('R'))
//   }
//   const handleZero  = () => { 
//       setLeft(0)
//       setRight(0)
//       setAll([])
//   }

//   return (
//     <div>
//       {left}
//       <Button handler = {handleLeft}  text = {'Left'} />
//       <Button handler = {handleZero}  text = {'Zero'} />
//       <Button handler = {handleRight} text = {'Right'} />
//       {right}
//       <History allClicks = {allClicks} />
//     </div>

//   )
// }

// export default App

// const History = ({ allClicks }) => {
//   if (allClicks.length === 0) {
//     return(
//       <div>
//         the App is used by pressing buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       Button press history: {allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handler, text }) => {
//   return(
//   <button onClick={handler}>
//     {text}
//   </button>
//   )
  
// }

