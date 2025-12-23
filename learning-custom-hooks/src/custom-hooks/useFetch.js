import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok) throw new Error("Something went wrong!!!");
            return res.json();
        })
        .then((data) => setData(data))
        .catch((err) => setError(err.message))
        .finally(() => setIsLoading(false));
    }, [url])
  return { data, isLoading, error };
}
