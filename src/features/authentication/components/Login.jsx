import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/lucidnote.svg'
import FlashMessage from '@/components/Flash'
import useForm from '@/hooks/useForm'
import useAuthService from '@/hooks/useAuthService'

export default function Login () {

    const { login } = useAuthService()

    const { field, changeField } = useForm({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const [flash, setFlash] = useState(false)
    
    const [flashMessage, setFlashMessage] = useState('')
    
    const [flashType, setFlashType] = useState('')

    function handleCloseFlasher () {
        setFlash(!flash)
    }

    const registrationStatus = localStorage.getItem('registrationStatus')
    
    useEffect(() => {
        if (registrationStatus) {
            setFlash(true)
            setFlashType('success')
            setFlashMessage('You have registered successfully. Now please login!')
            localStorage.removeItem('registrationStatus')
        }

    }, [registrationStatus])

    async function handleSubmit (event) {
        
        event.preventDefault()

        const response = await login(field)        
        
        if (response.success) {
            navigate(`/@${response.data.username}`)
        } else {
            setFlash(true)
            setFlashMessage(response.error)
        }

    }

    return (       
        <main className='container min-h-screen w-full flex flex-col justify-center gap-y-5 items-center px-8 select-none'>
            <a href='/' className='flex gap-2 items-center font-semibold justify-center'>
                <img src={logo} alt='lucidnote' className='h-11' /> 
                <h1 className='text-4xl'>Lucid<span>Note</span></h1>
            </a>
            {flash && <FlashMessage type={flashType} message={flashMessage} handleClose={handleCloseFlasher} />}
            <form method='POST' onSubmit={handleSubmit} className='container mx-auto max-w-lg p-8 rounded-lg bg-white drop-shadow-lg border select-none'>
                <h1 className='text-2xl font-semibold text-center'>Sign In</h1>
                {/* Email or Username Input */}
                <div className='relative z-0 w-full mb-6 group'>
                    <input type='text' name='username' id='username' placeholder=' ' required onChange={changeField} className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer' />
                    <label htmlFor='username' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>username</label>
                </div>
                
                {/* Password Input */}
                <div className='relative z-0 w-full mb-6 group'>
                    <input type='password' name='password' id='password' placeholder=' ' required onChange={changeField} autoComplete='on' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer' />
                    <label htmlFor='password' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                </div>            

                <button type='submit' className='text-white bg-black hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg w-full px-2 py-1 text-center'>Login</button>
                <p className='text-sm text-center py-4'>Did not have an account yet? <a href='/register' className='underline font-medium'>Register</a> now!</p>
            </form>
        </main>
    )
}
