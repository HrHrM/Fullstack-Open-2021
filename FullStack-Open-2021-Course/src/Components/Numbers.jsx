import React  from "react";
import Person from "./Person";


const Numbers = ({ persons, setPersons}) => {
    const personsMap = persons.map(e => <Person persons = {e} key = {e.id} setPersons = {setPersons}/>)

    return(
      <>
        {personsMap}
        
      </>
    )
}

export default Numbers
