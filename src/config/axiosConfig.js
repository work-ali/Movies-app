import axios from 'axios'

export default () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL
    axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_ACCESS_KEY}`;
}