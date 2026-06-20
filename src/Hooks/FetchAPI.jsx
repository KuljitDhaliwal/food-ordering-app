import { useState, useCallback } from "react"

export const useFetchAPI = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    //Delay the Promise
    const delay = (ms) => new Promise(res => setTimeout(res, ms))
    const fetchData = useCallback(
        async (URL, options = {}) => {
            setLoading(true)
            setError(null)
            try {
                for (let attempt = 1; attempt <= 3; attempt++) {
                    try {
                        const response = await fetch(URL, options);
                        if (!response.ok) {
                            const err = new Error(`HTTP Error: ${response.status}`)
                            err.status = response.status
                            throw err
                        }
                        const apiData = await response.json()
                        setData(apiData)
                        return
                    } catch (error) {
                        if (
                            error.status === 404 ||
                            error.status === 401 ||
                            error.status === 403
                        ) {
                            setError(error.message)
                            return
                        }
                        if(attempt === 3){
                            setError(error.message)
                            return
                        }
                    }
                    if(attempt < 3){
                        await delay(1000* Math.pow(2, attempt -1))
                    }
                }
            } finally{
                setLoading(false)
            }
        }, [])

    return { data, error, loading, fetchData }
}