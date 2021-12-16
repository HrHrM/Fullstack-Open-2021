import React  from "react";
import Person from "./Person";

const Numbers = ({ persons }) => {
    const personsMap = persons.map(e => <Person name = {e.name} number = {e.number} key = {e.id} />)
    
    return(
      <>
        {personsMap}
      </>
    )
}

export default Numbers
