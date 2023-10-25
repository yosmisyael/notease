import { axiosInstance } from '@/config/axios'
import useLocalStorage from './useLocalStorage'

export default function usePost () {
    
    const { getItem } = useLocalStorage()

    async function store (url, fields) {

        try {

            const { data: { data } } = await axiosInstance.post(url, fields, {

                headers: {
                    Authorization: getItem('token')
                }

            })  

            return { data }

        } catch ({ response: { data: { errors } } }) {
            
            return { error: errors }
        
        }
    }

    return { store }
}