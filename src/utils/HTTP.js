import { useEffect, useState } from 'react';
const axios = require('axios');

export function useAxios({ endPoint, method, inputData }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const fetch = async () => {
        try {

            const response = await axios.default.request({
                method,
                url: endPoint,
                data: inputData,
                withCredentials: true,
            });
            if (response.err) {
                setError(response.err);
            } else {
                setData(response.data);
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetch();
    }, []);
    return { loading, data, error };
}