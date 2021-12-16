import React from "react";

const Person = ({name, number}) => {
    return(
      <>
        <table>
          <tbody>
            <tr>
              <td> {name}: </td>
              <td> {number} </td>
            </tr>
          </tbody>
        </table>
      </>
      
    )
  }

export default Person