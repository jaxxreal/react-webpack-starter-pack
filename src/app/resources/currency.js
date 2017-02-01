import axios from 'axios';

const $http = axios.create();

export const getUSDBase = () => $http.get('http://api.fixer.io/latest?base=USD');
export const getEURBase = () => $http.get('http://api.fixer.io/latest?base=EUR');
export const getCustomBase = (base = '') => $http.get(`http://api.fixer.io/latest?base=${base}`);
