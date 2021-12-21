import './App.css'
import Header       from './Components/Header'
import Content      from './Components/Content'
import Footer       from './Components/Footer'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Footer parts = {course.parts} /> 
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