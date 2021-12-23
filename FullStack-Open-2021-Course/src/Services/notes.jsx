import axios from "axios";

//------------------Phonebook----------------------

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

export default { getAll, create }


//---------------------Notes----------------------

// const baseUrl = 'http://localhost:3001/notes'

// const getAll = () => {
//     const request = axios.get(baseUrl)
//     return request.then(response => response.data)
// }
// const create = (newObject) => {
//     const request = axios.post(baseUrl, newObject)
//     return request.then(response => response.data)
// }
// const update = (id, newObject) => {
//     const request = axios.put(`${baseUrl}/${id}`, newObject)
//     return request.then(response => response.data)
// }

// export default { getAll, create, update }



