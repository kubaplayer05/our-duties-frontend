import {useState} from "react";

export const useFetch = () => {

    const URL = "http://localhost:5000/api"

    let data = null
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async (route, options) => {

        try {

            setError(null)
            setIsLoading(true)

            const response = await fetch(URL + route, options)
            data = await response.json()

            if (!response.ok) {
                setError(data.error)
            }

            setIsLoading(false)
            return data

        } catch (err) {
            data = null
            setError(err.message)
            setIsLoading(false)
        }

    }

    return {
        fetchData,
        error,
        isLoading
    }
}