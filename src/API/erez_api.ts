import axios from 'axios';

const erezApiClient = (() => {
    return axios.create({
        baseURL: ""
    });
})();

// const erezRequest = async function (options, store) {

// }

export default erezApiClient;