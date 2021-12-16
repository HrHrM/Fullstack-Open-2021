import React, { useState } from 'react'
import logo                from './logo.svg'
import './App.css'
import Title               from './Components/Title'
import Filter              from './Components/Filter'
import PersonForm          from './Components/PersonForm'
import Numbers             from './Components/Numbers'


const App = () => {

  const [ persons, setPersons ] = useState([
    { 
      id:     0,
      name:   'Arto Hellas',
      number: '04242424242',
    },
    { 
      id:     1, 
      name:   'Phosphophyllite',
      number: '02121212121',
     },
     { 
      id:     2, 
      name:   'Cinnabar',
      number: '02131313131',
     },
     { 
      id:     3, 
      name:   'Cairngorn',
      number: '02141414141',
     },
  ]) 
  const [ newName, setNewName ]       = useState('')
  const [ newNumber, setNewNumber  ]  = useState('')
  const [ searchName, setSearchName ] = useState('')

  const repeat = (name, number) =>{

    let igual = false

    persons.forEach(e => {
      if (e.name === name || e.number === number || name.length === 0 || number.length === 0 ) {
        igual = true
      }
    })
    
    return igual
  }

  const addPerson = (event) => {

    event.preventDefault()

    const newPerson = {
      id:     persons.length + 1,
      name:   newName,
      number: newNumber,
    }

    const igual = repeat(newPerson.name, newPerson.number)

      if(!igual) {
        setPersons(persons => [...persons, newPerson])
        console.log(newPerson)

      }else{
        window.alert('There is a problem with the registration, either the name/number already exists or one of them is empty')

      }

      setNewName('')
      setNewNumber('')
  }

  return (
    <div>
      <Title text = {'Phonebook'} />
      <Title text = {'Search'} />
      <div>
        <Filter searchName = {searchName} setSearchName = {setSearchName} persons = {persons} />
      </div>
      <Title text = {'Add a new person'} />
      <div>
        <PersonForm addPerson    = {addPerson} 
                    newName      = {newName}
                    setNewName   = {setNewName}
                    newNumber    = {newNumber}
                    setNewNumber = {setNewNumber} />
      </div>
      <Title text = {'Numbers'} />
      <div>
        <Numbers persons={persons} />
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
