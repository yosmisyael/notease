import { useNavigate } from "react-router-dom"
import useLocalStorage from "./useLocalStorage"
import { axiosInstance } from "@/config/axios"

export default function useAuthService () {

    const { getItem, setItem, removeItem } = useLocalStorage()
    
    const navigate = useNavigate('/')

    async function register (data) {
        try {
            const response = await axiosInstance.post('/users', data)
            if (response.status === 201) {
                return {
                    success: true,
                    data: response.data.data
                }
            } 
        } catch (error) {
            return {
                success: false,
                error: error.response.data.errors
            }
        }
    }

    async function login (data) {
        try {
   
            const response = await axiosInstance.post('/users/login', data)

            if (response.status === 200) {

                setItem('token', response.data.data.token)

                const { data: { data } } = await axiosInstance.get('/users/current', {
                    headers: {
                        Authorization: getItem('token')
                    }
                })
                
                setItem('user', JSON.stringify(data))

                return { success: true, data }
            }
   
        } catch ({ response: { data: { errors } } }) {
   
            return {
                success: false,
                error: errors
            }
        }
    }

    async function logout () {
        
        const response = await axiosInstance.delete('/users/logout', {
            headers: {
                Authorization: getItem('token')
            }
        })

        if (response.status === 200) {
            
            removeItem('token')

            removeItem('user')
            
            navigate('/')
            
        }
    }

    return { login, logout, register }
    
}