import { axiosInstance } from '@/config/axios'
import { useCallback, useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useFetch (url) {

    const { getItem } = useLocalStorage()
    
    const token = getItem('token')
    
    const [data, setData] = useState(null)

    const [error, setError] = useState(null)

    const show = useCallback(async () => {
    
        try {
        
            const response = await axiosInstance.get(url, {
                headers: {
                    Authorization: token
                }
            }) 
    
            setData(response.data.data)

        } catch (error) {

            setError(error)
    
        }

    }, [token, url])

    useEffect(() => {
        
        show()

    }, [show])
    
    return { show, data, error } 

}