'use client'
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "./fetch-api";
// import { getStrapiURL } from "./api-helpers";
// import qs from "qs";
// import Loader from "@/components/Loader";

interface FetchResults {
    isLoading: boolean;
    error: Error | null;
    data: any;
}

function useFetch (query: string, urlParamsObject = {}, options = {}):FetchResults {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            try {
                const responseData = await fetchAPI(query, urlParamsObject, options);
                setData(responseData);      
            } catch (error) {
                console.error(error);
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        }, [query, urlParamsObject, options]);
      
        // if (isLoading) return <Loader />;
      
        return {isLoading, error, data};
}

export default useFetch;