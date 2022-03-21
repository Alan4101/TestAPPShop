import axios from "axios";

    export async function getAll(url){
        const responce = await axios.get(url)
        return responce.data;
    }
    export async function createNewPost(url, payload){
        const res = await axios.post(url, payload)
        const data = res.data;
        console.log("POST/DATA" ,data);
    }
    export async function getById(url, id){
        const urlId = `${url}?id=${id}`;
        const responce = await axios.get(urlId)
        return responce.data;

    }
