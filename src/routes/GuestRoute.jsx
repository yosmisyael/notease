import { Outlet, Navigate } from 'react-router-dom'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function GuestRoute () {

    const { getItem } = useLocalStorage()

    const token = getItem('token')

    const { username } = JSON.parse(getItem('user')) ?? 'not found'

    return (
        !token ? <Outlet /> : <Navigate to={`/@${username}`} />
    )
}