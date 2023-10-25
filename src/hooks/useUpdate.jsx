import { axiosInstance } from '@/config/axios'
import useLocalStorage from './useLocalStorage'

export default function useUpdate () {

    const { getItem } = useLocalStorage()

    async function update (url, data) {

        try {
            const response = await axiosInstance.put(url, data, {
                headers: {
                    Authorization: getItem('token')
                }
            }) 

            return { data: response.data.data }

        } catch (error) {

            return { error: error.response.data.errors }
        
        }

    }

    return { update }

}