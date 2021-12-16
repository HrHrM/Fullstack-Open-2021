import React        from "react";
import handleChange from "./utils";

const PersonForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber }) => {

    return(
        <>
            <form onSubmit = {addPerson} >
                    <table>
                        <tbody>
                            <tr>
                                <td> name: </td>
                                <td>  <input value = {newName} onChange = {handleChange(setNewName)} /> </td>
                            </tr>
                            <tr>
                                <td> number: </td>
                                <td>  <input value = {newNumber} onChange={handleChange(setNewNumber)} /> </td>
                            </tr>
                        </tbody>
                    </table> 
                <div>
                    <button type="submit">add</button>
                </div>
            </form>            
        </>
    )

} 
export default PersonForm