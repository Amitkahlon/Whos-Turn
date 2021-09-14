import axios from 'axios';
import connectionData from "./connectionData.js"; 


export default axios.create({
    baseURL: connectionData.tunnelURL
})