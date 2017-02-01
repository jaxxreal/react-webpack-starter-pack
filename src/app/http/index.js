import $http from 'axios';
import { API_URL } from '../config';

/**
 * store - is full fledged redux store, feel free to dispatch loader animations an so on
 * @param store
 */
export default () => {
    $http.interceptors.request.use((config) => {
        config.url = `${API_URL}/${config.url}`;
        return config;
    });
};
