const USER_URL = "https://anifansonly-java-server.herokuapp.com"

export const registerUser = (user) =>
    fetch(`${USER_URL}/api/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json())


export const findAllUsers = () =>
    fetch(`${USER_URL}/api/users`).then(response => response.json())



export const findUserById = (uid) =>
    fetch(`${USER_URL}/api/user/${uid}`).then(response => response.json())



const api = {
    registerUser, findAllUsers, findUserById
}

export default api;