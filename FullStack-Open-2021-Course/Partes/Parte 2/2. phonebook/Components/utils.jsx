import React from "react"

const handleChange = (handler) => (event) => {
    console.log(event.target.value)
    handler(event.target.value)
}
export default handleChange