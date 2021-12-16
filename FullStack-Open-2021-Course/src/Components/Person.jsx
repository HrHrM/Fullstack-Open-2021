import React from "react";

const Person = ({person}) => {
    return(
      <>
        <table>
          <tbody>
            <tr>
              <td> {person.name} </td>
              <td> : {person.number} </td>
            </tr>
          </tbody>
        </table>
      </>
      
    )
  }

export default Person