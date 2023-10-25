import logo from '@/assets/lucidnote.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Flash from '@/components/Flash'
import useAuthService from '@/hooks/useAuthService'
import useForm from '@/hooks/useForm'

export default function Register() {

    const { register } = useAuthService()

    const navigate = useNavigate()

    const { field, changeField } = useForm({
        email: '',
        username: '',
        name: '',
        password: ''
    })

    const [flash, setFlash] = useState(false)

    function handleCloseFlasher () {
        setFlash(!flash)
    }

    const [flashMessage, setFlashMessage] = useState('')

    async function handleSubmit (event) {
        
        event.preventDefault()
        
        const response = await register(field)
        
        if (response.success) {
            localStorage.setItem('registrationStatus', response.success)
            navigate('/login')
        } else {
            setFlash(true)
            setFlashMessage(response.error)
        }
    }

    return (    
        <main className='min-h-screen w-full flex flex-col justify-center gap-y-5 items-center px-8 select-none'>
            <a href='/' className='flex gap-2 items-center font-semibold justify-center my-4'>
                <img src={logo} alt='lucidnote' className='h-11' /> 
                <h1 className='text-4xl'>Lucid<span>Note</span></h1>
            </a>
            {flash && <Flash type={'error'} message={flashMessage} handleClose={handleCloseFlasher} />}
            <form method='POST' onSubmit={handleSubmit} className='container max-w-lg p-8 rounded-lg bg-white drop-shadow-lg border select-none'>
                <h1 className='text-2xl font-semibold text-center'>Sign Up</h1>
                {/* Email Input */}
                <div className='relative z-0 w-full mb-6 group'>
                    <input type='email' name='email' id='email' placeholder='' onChange={changeField} required  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer invalid:[&:not(:placeholder-shown)]:border-red-500' />
                    <label htmlFor='email' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email address</label>
                    <span className='mt-1 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):invalid]:block'>
                        Please enter a valid email address
                    </span>
                </div>
                
                {/* Name Input */}
                <div className='relative z-0 w-full mb-6 group'>
                    <input type='text' name='name' id='name' placeholder='' required onChange={changeField}  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer' />
                    <label htmlFor='name' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Name</label>
                </div>
                
                {/* Username Input */}
                <div className='relative z-0 w-full mb-6 group'>
                    <input type='text' name='username' id='username' placeholder='' required onChange={changeField}  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer' />
                    <label htmlFor='username' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                </div>
                
                {/* Password Input */}
                <div className='relative z-0 w-full mb-6 group'>
                    <input type='password' name='password' id='password' placeholder='' required pattern='.{8,}' autoComplete='on' onChange={changeField}  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer invalid:[&:not(:placeholder-shown)]:border-red-500' />
                    <label htmlFor='password' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'>Password</label>
                    <span className='mt-1 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):invalid]:block'>
                        Password should have minimum 8 characters.
                    </span>
                </div>            

                <button type='submit' className='text-white bg-black hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg w-full px-2 py-1 text-center'>Register</button>
                <p className='text-sm text-center py-4'>Already have an account? <a href='/login' className='underline font-medium'>Login</a> now!</p>
            </form>
        </main>   
    )
}
