import { BASE_URL } from './constants/constants'
import axios from 'axios';
import { Buffer } from 'buffer';


// const Customtoken = {
//     Username: 'ck_79ca984282b49d196318c43202a8f4a17e82ddca',
//     Password: 'cs_1eb1e1fe248d916fc45c74671eee12edeaa936e8'
// }


async function Get(path, username, password) {
    let url = BASE_URL + path
    var config = {
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
        }
    }
    let response = await axios(config)
    return response.data

}

async function Post(path, data, token) {
    let url = BASE_URL + path
    var config = {
        method: 'post',
        url: url,
        headers: token
            ? {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            }
            : {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + `${Customtoken}`
            },
        data: data
    };

    let response = await axios(config)
    return response.data

}

export { Post, Get }