import { Outlet, Navigate, useParams } from 'react-router-dom'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function ProtectedRoute () {

    const token = localStorage.getItem('token')

    const { user } = useParams()
    
    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))
    
    // return !token ? <Navigate to={'/login'} /> : user.slice(1) !== username ? <Navigate to={'/404'} /> : <Outlet />
    if (!token) return <Navigate to={'/login'} />

    if (token && !user.slice(1) !== username) return <Outlet />
    
    if (token && user.slice(1) !== username) return <Navigate to={'/404'} />
    

}
