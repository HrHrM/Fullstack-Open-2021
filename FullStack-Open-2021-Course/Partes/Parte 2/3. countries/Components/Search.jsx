import React from "react";

const Search = ({ searchCountry, setSearchCountry }) => {

    const handleSearch = (event) => {
        let value = ''
        if (event.target.value.length > 0) {
            value = event.target.value
            console.log(event.target.value)  
        }
        setSearchCountry(value)
    }
    return(
        <>
            Find countries <input value={searchCountry} onChange={handleSearch} />
        </>
    )

}
export default Search