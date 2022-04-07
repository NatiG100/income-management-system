import { useEffect, useState } from 'react';
const axios = require('axios');

export function useLazyAxios({ endPoint, method, inputData }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [trigger, setTrigger] = useState(false);

    const fetch = () => {
        setTrigger(true);
    }
    const fetchApi = async () => {
        try {
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
        } catch (err) {
            setError(err.response.data);
        } finally {
            setLoading(false);
            setTrigger(false);
        }
    }
    useEffect(() => {
        if (trigger) {
            setLoading(true);
            fetchApi();
        }
    }, [trigger]);
    return [fetch, { loading, data, error }];
}