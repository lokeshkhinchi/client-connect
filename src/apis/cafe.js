import axios from 'axios';

const fetchCafes = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

export { fetchCafes };
