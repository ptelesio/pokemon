import axios from 'axios';

const instance = axios.create();
instance.interceptors.response.use(function (response) {

    return response.data;

}, function (error) {

    let exceptionData;

    if (error.response) {
        exceptionData = error.response.data;

    } else if (error.request) {
        exceptionData = error.request;

    } else {
        exceptionData = error.message;

    }

    throw exceptionData;

});

export default instance;