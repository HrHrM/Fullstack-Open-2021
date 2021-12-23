import React  from "react";
import Person from "./Person";

const Filter = ({ persons, searchName, setSearchName }) => {

    const handleSearch = (event) => {
        let value = ''
        if (event.target.value.length > 0) {
            value = event.target.value
            console.log(event.target.value)
        }
        setSearchName(value)
    }

    const search = persons.filter(person => 
        person.name.toLocaleLowerCase() === searchName.toLocaleLowerCase())
        .map(m => <Person key = {m.id} persons = {m}/> )
    
    return(
        <>
            filter shown with(Search by name): <input value = {searchName}
                                                      onChange = {handleSearch} />
            {search}
        </>
    )
}

export default Filter