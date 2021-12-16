import React, { useState } from 'react'
import logo                from './logo.svg'
import './App.css'
import Notes               from './Components/Notes'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
    { name: 'Phosphophyllite'}
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('added new user', event.target)

    const newPerson = {
      name: newName
    }
    console.log(newPerson)
    setPersons(persons.concat(newPerson))
    setNewName('')
  }
  const handlePerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const personsMap = persons.map(e => {
    return(
      <Notes data = {e.name} key = {e.name} />
    )
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson} >
        <div>
          name: <input value    = {newName}
                       onChange = {handlePerson}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsMap}
      </div>
      
    </div>
  )
}

export default App  


//---------------------Notes----------------------

// const App = ({ content }) => {

//   const [ notes, setNotes ]     = useState(content)
//   const [ newNote, setNewNote ] = useState('')
//   const [ showAll, setShowAll ] = useState([])

  
//   const addNote = (event) => {
//     event.preventDefault()
    
//     console.log('Button Clicked', event.target)
//     const noteObject = {
//       id:        notes.length + 1,
//       content:   newNote,
//       date:      new Date().toISOString,
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
