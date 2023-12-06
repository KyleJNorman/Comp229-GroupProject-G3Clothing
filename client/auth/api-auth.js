/*
const signin = async (user) => {
try {
    console.log(user)
let response = await fetch('/api/auth/signin/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },

    // credentials: 'include',
    body: JSON.stringify(user)
    })
   return await response.json()

} catch(err) {
console.log(err) 
}
}

/**
 * This function sends a GET request to the '/api/auth/signout/' endpoint
 * and returns the parsed JSON response.
 *
 * @returns {Promise<Object>} The parsed JSON response.
 */
/*
const signout = async () => {
    try {
        let response = await fetch('/api/auth/signin', { method: 'GET' })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { signin, signout }
*/

const signin = async (user) => {
    try {
        console.log(user)
    let response = await fetch('https://g3-clothing-backend-api-506d32c2173a.herokuapp.com/auth/signin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    
        // credentials: 'include',
        body: JSON.stringify(user)
        })
       return await response.json()
    
    } catch(err) {
    console.log(err) 
    }
    }
    
    /**
     * This function sends a GET request to the '/api/auth/signout/' endpoint
     * and returns the parsed JSON response.
     *
     * @returns {Promise<Object>} The parsed JSON response.
     */
    const signout = async () => {
        try {
            let response = await fetch('https://g3-clothing-backend-api-506d32c2173a.herokuapp.com/auth/signout/', { method: 'GET' })
            return await response.json()
        } catch (err) {
            console.log(err)
        }
    }
    
    export { signin, signout }
    
