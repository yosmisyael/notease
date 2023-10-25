import { Outlet, Navigate, useParams } from 'react-router-dom'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function ProtectedRoute () {

    const token = localStorage.getItem('token')

    const { user } = useParams()
    
    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))
    
    return !token ? <Navigate to={'/login'} /> : user.slice(1) !== username ? <Navigate to={'/404'} /> : <Outlet />
    
}
