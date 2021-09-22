import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        console.log("use effect ran");
        // setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data for this ressource');
                }
                return res.json();
            })
            .then(jsonData => {
                setData(jsonData);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        // }, 500);
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };

};
export default useFetch;
