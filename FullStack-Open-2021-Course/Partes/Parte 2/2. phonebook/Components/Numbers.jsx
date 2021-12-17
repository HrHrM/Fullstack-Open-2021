import React  from "react";
import Person from "./Person";

const Numbers = ({ persons }) => {
    const personsMap = persons.map(e => <Person persons = {e} key = {e.id} />)
    
    return(
      <>
        {personsMap}
      </>
    )
}

export default Numbers
