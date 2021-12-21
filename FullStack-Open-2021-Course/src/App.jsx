import React, { 
  useState,
  useEffect,
 }                         from 'react'
import './App.css'
import axios               from 'axios'
import Search              from './Components/Search'
import Result              from './Components/Result'

const App = () => {
  const [ countries, setCountries ]         = useState([])
  const [ searchCountry, setSearchCountry ] = useState('')
  const [ countryShow, setShow ]            = useState({})

  const url  = `https://restcountries.com/v3.1/name/${searchCountry}`
  const url2 = 'https://restcountries.com/v3.1/all'

  useEffect(() => {
    console.log('Effect taking countries to the state')
    axios.get(url).then(response => {
      console.log('fulfilled 1')
      setCountries(response.data)
    })
  }, [url])

  useEffect(() => {
    console.log('Effect taking place into Show state')
    let changeShow = {}
    countries.forEach(e => changeShow[e.name] = false)
    console.log('fulfilled 2')
    setShow(changeShow)
  }, [countries])

  // const search = countries.filter(c => 
  //   c.name.common === searchCountry)
  //   .map(m => <Country key = {m.name.common} country = {m} />)

  return(
    <div>
      <Search searchCountry = {searchCountry} setSearchCountry = {setSearchCountry} />
      <Result countries = {countries} setCountries = {setCountries} searchCountry = {searchCountry} countryShow = {countryShow} setShow = {setShow}  />
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
