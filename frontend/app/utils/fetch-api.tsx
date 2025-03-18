import qs from "qs"; // query string parsing & formatting functionality
// import { getStrapiURL } from "./api-helpers";

// Get beginning of URL for anything in Strapi, can add specific path
export function getStrapiURL(path = '') {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
}

export function getStrapiMedia(url: string | null) {
    if (url == null) {
        // return '/placeholder1024.png';
        return '/noImageFound1024.png';
    }

    // Return the full URL regardless of whether the media is hosted externally or within the Strapi API.
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return `${getStrapiURL()}${url}`;
}

// export function formatDate(dateString: string) {
//     const date = new Date(dateString);
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
// }

export async function fetchAPI(
    query: string, // (1) API endpoint path
    urlParamsObject = {}, // (2) object containing URL parameters
    options = {} // (3) object containing additional options for the API call
) {
    try {
        // Merge default and "user" options
        const mergedOptions = {
            next: { revalidate: 60 }, // purge data cache & re-fetch data /interval
            headers: {
                "Content-Type": "application/json",
            },
            ...options, // (3)
        };

        // Build request URL
        const queryString = qs.stringify(urlParamsObject); // (2)
        const requestUrl = `${getStrapiURL(
            `/api${query}${queryString ? `?${queryString}` : ""}`
        )}`; // get Strapi URL, pass in path (1) & query from urlParams obj (2)

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        const data = await response.json();

        return data;

    } catch (error) {
        console.error(error);
        throw new Error(`Please check if your server is running and you set all the required tokens.`);
    }
}