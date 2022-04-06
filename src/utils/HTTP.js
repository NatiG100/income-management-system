import { useEffect, useState } from 'react';
const axios = require('axios');

export function useAxios({ endPoint, method, inputData }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const fetch = async () => {
        const response = await axios({
            method,
            url: endPoint,
            data: inputData
        });
        if (response.err) {
            setError(response.err);
        } else {
            setData(response.data);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetch();
    }, [endPoint, method, inputData]);
    return { loading, data, error };
}