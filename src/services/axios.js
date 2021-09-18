import axios from 'axios';
import connectionData from "./connectionData.json";


export default axios.create({
    baseURL: connectionData.tunnelURL
})