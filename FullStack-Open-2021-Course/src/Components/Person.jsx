import React from "react";
import Service from '../Services/notes'

const Person = ({persons, setPersons}) => {

  const handleDel = () => {
    const message = `Delete ${persons.name}`
    console.log('Delete Clicked')
    if(window.confirm(message)){
      Service.erase(persons.id)
      Service.getAll().then(data => setPersons(data))
    }
  }

  return(
    <>
      <table>
        <tbody>
          <tr>
            <td> {persons.name}: </td>
            <td> {persons.number} </td>
            <td> <button onClick = {handleDel}>Delete</button> </td>
          </tr>
        </tbody>
      </table>
    </>
    
  )
}

export default Person