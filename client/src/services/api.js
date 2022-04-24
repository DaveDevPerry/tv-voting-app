import axios from 'axios';

const host = 'https://tv-poll.herokuapp.com/api';
// const host = 'https://tv-poll.herokuapp.com';
// host for local dev below
// const host = 'http://localhost:4000/api';

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const call = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
};

export default { setToken, call };
