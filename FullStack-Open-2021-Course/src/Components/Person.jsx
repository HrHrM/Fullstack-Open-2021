import React from "react";

const Person = ({persons}) => {

  return(
    <>
      <table>
        <tbody>
          <tr>
            <td> {persons.name}: </td>
            <td> {persons.number} </td>
          </tr>
        </tbody>
      </table>
    </>
    
  )
}

export default Person