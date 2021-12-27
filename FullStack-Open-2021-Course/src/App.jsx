import React, { 
  useState,
  useEffect,
 }                         from 'react'
import './App.css'
import Title               from './Components/Title'
import Filter              from './Components/Filter'
import PersonForm          from './Components/PersonForm'
import Numbers             from './Components/Numbers'
import Service             from './Services/notes'


const App = () => {

  const [ persons, setPersons ]       = useState([]) 
  const [ newName, setNewName ]       = useState('')
  const [ newNumber, setNewNumber ]   = useState('')
  const [ searchName, setSearchName ] = useState('')

  useEffect(() =>{
    Service.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])
  console.log('render', persons.length, 'persons')

  // const repeat = (name, number) =>{

  //   let igual = false

  //   persons.forEach(e => {
  //     if (e.name === name || e.number === number || name.length === 0 || number.length === 0 ) {
  //       igual  = true
  //     }
  //   })
    
  //   return {igual, idCopy}
  // }

  // const addPerson = (event) => {

  //   event.preventDefault()

  //   const newPerson = {
  //     name:   newName,
  //     number: newNumber,
  //   }

  //   const igual  = repeat(newPerson.name, newPerson.number)

  //     if(!igual) {
  //       Service.create(newPerson).then(returnedPerson => {
  //         setPersons(persons.concat(returnedPerson))
  //         console.log(newPerson)
  //       })

  //     } else {
  //       const message = `${newName} is already on the phonebook, replace the old number with the new one?`
  //       if(window.confirm(message)) {
  //         Service.update(idCopy, newPerson).then(() => {
  //           Service.getAll().then(data => setPersons(data))
  //           window.alert('Number updated')
  //         })
  //       }

  //     }
  //   setNewNumber('')
  //   setNewName('')
  // }

  const addPerson = (event) => {
    event.preventDefault()

    Service.query(newName).then(person => {
      const newPerson = {
        name:   newName,
        number: newNumber, 
      }
      
      if(person) {
        const message = `Testing 1??`
        // if(window.confirm(message)) {
        //   Service.update(person.id, newPerson).then(() => {
        //     Service.getAll().then(data => setPersons(data))
        //   }).catch(error => {
        //     console.log(error)
        //   })
        // }
        console.log('Testing')
      }

    })
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
        <Numbers persons={persons} setPersons = {setPersons}/>
      </div>
    </div>
  )
}

export default App  



//---------------------Notes----------------------

// import noteService from './Services/notes'

// const App = () => {

//   const [ notes, setNotes ]     = useState([])
//   const [ newNote, setNewNote ] = useState('')
//   const [ showAll, setShowAll ] = useState([])
  
//   useEffect(() => {
//     noteService.getAll().then(initialNotes => setNotes(initialNotes))
//   }, [])


//   const addNote = (event) => {
//     event.preventDefault()
    
//     console.log('Button Clicked', event.target)
//     const noteObject = {
//       content:   newNote,
//       date:      new Date(),
//       important: Math.random() < 0.5,
//     }

//     noteService.create(noteObject).then(returnedNote => {
//       setNotes(notes.concat(returnedNote))
//       setNewNote('')
//     })

//   }

//   const toggleImportanceOf = (id) => {
//     const url         = `http://localhost:3001/notes/${id}`
//     const note        = notes.find(n => n.id === id)
//     const changedNote = {...note, important: !note.important}
    
//     noteService.update(id, changedNote).then(returnedNote => {
//       setNotes(notes.map(note => note.id !== id ? note : returnedNote))
//       })
//       .catch(error => {
//         alert(
//           `the note '${note.content}' was already deleted from server`
//         )
//         setNotes(notes.filter(n => n.id !== id))
//       })

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
//         <Notes key={e.id} note = {e} toggleImportance={() => toggleImportanceOf(e.id)} />
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

// const Notes = ({ note, toggleImportance }) => {
//   const label = note.important
//     ? 'make not important' : 'make important'

//   return(
//     <li>
//      {note.content} 
//      <button onClick={toggleImportance} > {label} </button>
//     </li>
//   ) 
// }


