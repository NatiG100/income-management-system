import { useEffect, useState } from 'react';
const axios = require('axios');

export function useLazyAxios({ endPoint, method, inputData }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const fetch = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios({
                    method,
                    url: endPoint,
                    data: inputData
                });
                setData(response.data);
                resolve(response.data);
            } catch (err) {
                setError(err.response.data);
                reject(err.response.data);
            } finally {
                setLoading(false);
            }
        });
    }
    return [fetch, { loading, data, error }];
}