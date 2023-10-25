import { axiosInstance } from '@/config/axios'
import useLocalStorage from './useLocalStorage'

export default function useDelete () {

    const { getItem } = useLocalStorage()

    async function destroy (url) {
        
        try {
            
            const response = await axiosInstance.delete(url, {
                headers: {
                    Authorization: getItem('token')
                }
            })
    
            return { data: response.data.data }

        } catch (error) {

            return { error: error.response.data }

        }

    }

    return { destroy }

} 