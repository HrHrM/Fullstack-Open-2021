import React  from "react";
import Person from "./Person";
import handleChange from "./utils";

const Filter = ({ persons, searchName, setSearchName }) => {

    const search = persons.filter(person => 
        person.name.toLocaleLowerCase() === searchName.toLocaleLowerCase())
        .map(m => <Person key = {m.id} person = {m}/> )
    
    return(
        <>
            filter shown with(Search by name): <input value = {searchName}
                                                      onChange = {handleChange(setSearchName)} />
            {search}
        </>
    )
}

export default Filter