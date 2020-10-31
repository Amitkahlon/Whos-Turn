import axios from 'axios';

const emulatorLocalHost = 'http://10.0.2.2:3000'
const localHost = 'http://localhost:3000'

export default axios.create({
    baseURL: emulatorLocalHost
})