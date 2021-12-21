import React, { useState } from 'react'
import './App.css'
import Title               from './Components/Title'
import Button              from './Components/Button'
import Statistics          from './Components/Statistics'

const App = () => {
  
  const [ good, setGood ]       = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ]         = useState(0)

  const handleGood = () => {  
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <div>
        <Title title = {'Give Feedback'} />
      </div>
      <div>
        <Button handler = {handleGood}    text = {'Good'} />
        <Button handler = {handleNeutral} text = {'Neutral'} />
        <Button handler = {handleBad}     text = {'Bad'} />
      </div>
      <div>
        <Title title = {'Statistics'} />
      </div>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </>
    
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

