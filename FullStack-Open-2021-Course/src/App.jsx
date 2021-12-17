import React, { 
  useState,
  useEffect,
 }                         from 'react'
import logo                from './logo.svg'
import './App.css'
import axios               from 'axios'
import handleChange        from './Components/utils'
import Country             from './Components/Country'

const App = () => {
  const [ countries, setCountries ]         = useState([])
  const [ searchCountry, setSearchCountry ] = useState('')
  const [ showCountry, setShowCountry ]     = useState(false)

  const url = 'https://restcountries.com/v3.1/all'

  useEffect(() => {
    console.log('Effect taking place')
    axios
    .get(url)
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
      
    })
  }, [])
  // console.log('render', countries.length, 'countries')
  // console.log(countries)

  // const countryNames = countries.map(e => {
  //   console.log(e.name.common)
  //   return( <p key = {e.name.common} > {e.name.common} </p> )
  // })  

  const countryFilter = countries.filter(e => 
    e.name.common === searchCountry)
    .map(m => <Country key={m.name.common} country={m} />)
    console.log('render', countries.length, 'countries')
    console.log(countries)


  return(
    <div>
      <p>
        Find countries: <input value = {searchCountry}
                               onChange = {setSearchCountry} />
        {countryFilter}
      </p>
    </div>
  )
}
export default App  



//---------------------Notes----------------------

// const App = () => {

//   const [ notes, setNotes ]     = useState([])
//   const [ newNote, setNewNote ] = useState('')
//   const [ showAll, setShowAll ] = useState([])

//   useEffect(() => {
//     console.log('Effect taking place')
//     axios
//     .get('http://localhost:3001/notes')
//     .then(response => {
//       console.log('promise fulfilled')
//       setNotes(response.data)
//     })
//   }, [])
//   console.log('render', notes.length, 'notes')
  
//   const addNote = (event) => {
//     event.preventDefault()
    
//     console.log('Button Clicked', event.target)
//     const noteObject = {
//       id:        notes.length + 1,
//       content:   newNote,
//       date:      new Date(),
//       important: Math.random() < 0.5,
//     }
//     console.log(noteObject)
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }
//   const handleShowChange = () => {
//     setShowAll(!showAll)
//   }

//   const notesShow = showAll ? notes : notes.filter(note => note.important === true)
//   const notesShowMap = notesShow.map(e => {
//       return(
//         <Notes key={e.id} note = {e} />
//       )
//   })

//   return(
//     <div>
//       <h1> Notes </h1>
//       <div>
//         <button onClick={handleShowChange}>
//           Show {showAll ? 'important' : 'all' }
//         </button>
//       </div>
//       <ul>
//         {notesShowMap}
//       </ul>
//       <form onSubmit={addNote} >
//         <input value    = {newNote}
//                onChange = {handleNoteChange} />
//         <button type='submit' >
//           save
//         </button>
//       </form>
//     </div>
//   )
// }

// export default App

// const Notes = ({ note }) => {
//   return <li> {note.content} </li>
// }
