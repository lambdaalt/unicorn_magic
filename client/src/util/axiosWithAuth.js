import axios from 'axios'
import Cryptr from 'cryptr'

//Have your own secret? Plug it in here.
const client = process.env.REACT_APP_CLIENT_ID || 'hello'
const secret = process.env.REACT_APP_CLIENT_SECRET || 'roman'

//Base 64 Encode client:secret
const api_key = btoa(`${client}:${secret}`);
const baseURL = 'http://localhost:8080'


//Finds Token and Checks when it expires
export const axiosWithAuth = () => {
    let {
        token,
        expires,
        token_type
    } = JSON.parse(localStorage.getItem("token"))

    // This Seems Like it really does nothing. I will circle back to this RJ
    expires && expires > Date.now() && console.log("Token Has Expired")

    return axios.create({
        baseURL: baseURL,
        timeout: 1000,
        headers: {
            Authorization: `${token_type} ${token}`
        }
    })
}

export const loginHandler = u => dispatch => {
    axios
        .post(`${baseURL}/oauth/token`, `grant_type=password&username=${u.username}&password=${u.password}`, {
            headers: {
                Authorization: `Basic ${api_key}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => {
            if (res.status === 200) {
                u.secret ? encrypter(u.secret, res.data) :
                    localStorage.setItem('token', JSON.stringify({
                        token: res.data.access_token,
                        token_type: res.data.token_type,
                        expires: Date(res.data.expires_in)
                    }))
                    dispatch({type:"FETCH_SUCCESS",payload:true})
            } else {
                dispatch({type:"FETCH_FAIL",payload:false})
            }
        })
        .catch(err => dispatch({type:"FETCH_FAIL",payload:false}))
}



export const encrypter = (secret, data) => {
    //Encrypts Refresh Token
    const crypto = new Cryptr(secret)
    const encrypt = crypto.encrypt(data.refresh_token)
    localStorage.setItem('token', JSON.stringify({
        refresh_token: encrypt,
        token: data.access_token,
        token_type: data.token_type,
        expires: Date(data.expires_in)
    }))
}