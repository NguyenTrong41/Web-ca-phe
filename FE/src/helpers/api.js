import axios from 'axios'

export default function requestApi(endpoint, method, body, responseType = 'json'){
    const headers = {
        "Accept": "application/json",
        "Content-Type": 'application/json',
        "access-Control-Allow-Origin": "*"
    }
    const instance = axios.create({headers});
    return instance.request({
        method: method,
        url: `http://localhost:3001/${endpoint}`,
        data: body,
        responseType: responseType

    })
}