import axios from 'axios';

const starwars_data = axios.get('https://swapi.dev/api/people/1')
    .then(res => console.log(res.data))

export default starwars_data;