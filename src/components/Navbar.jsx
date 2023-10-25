import { useEffect, useState } from 'react'
import { MdPerson2, MdOutlineMenu, MdOutlineStickyNote2, MdOutlineAddTask, MdExpandMore, MdOutlineLogout, MdOutlineHome, MdClose } from 'react-icons/md'
import Logo from '@/assets/lucidNote.svg'

export default function Navbar () {
    const isAuthorized = false

    const [isUserMenuExpanded, setUserExpanded] = useState(false)

    const showAuthorizedMenu = () => {
        setUserExpanded(!isUserMenuExpanded)
    }

    const [isMenuExpanded, setMenuExpanded] = useState(false)

    const showMenu = () => {
        setMenuExpanded(!isMenuExpanded)
    }

    const [isProductsMenuExpanded, setProductsMenu] = useState(false)

    const showProductsMenu = () => {
        setProductsMenu(!isProductsMenuExpanded)
    }

    const getWindowWidth = () => {
        return {
            width: window.innerWidth 
        }
    }

    const [screenWidth, setScreenWidth] = useState(getWindowWidth)

    useEffect(() => {
        const updateWindowWidth = () => {
            setScreenWidth(getWindowWidth())
        }
        
        window.addEventListener('resize', updateWindowWidth)

        return(() => {
            window.removeEventListener('resize', updateWindowWidth)
        })
    }, [screenWidth])
    
    return (
        <header className="fixed w-full drop-shadow select-none">
            <nav className="bg-white py-2.5 px-12 flex gap-4 items-center">
                <a href="/" className="font-semibold text-lg flex items-center gap-1">
                    <img src={Logo} alt="logo" className='h-5' />
                    LucidNote
                </a>
                    <ul className={
                        screenWidth.width < 768
                            ? isMenuExpanded 
                                ? 'flex flex-col gap-4 absolute top-[100%] h-max w-full bg-white left-0 px-10 py-4 drop-shadow-sm'
                                : 'hidden'
                            : 'flex flex-row w-full gap-0 items-center py-0'
                      }>    
                        <li><a href="#" className="flex text-base py-0.5 px-2 rounded-lg hover:bg-slate-100">Why LucidNote</a></li>
                        <li className='relative' onClickCapture={showProductsMenu}>
                            <a href="#" className="flex items-center justify-between py-0.5 px-2 rounded-lg gap-1 hover:bg-slate-100" >Products <MdExpandMore size={16} className={isProductsMenuExpanded ? 'rotate-180 transition-all' : 'transition-all'} /></a>
                            { isProductsMenuExpanded 
                                ? (
                                    <div className="md:absolute grid grid-row-2 gap-2 top-full w-full md:w-max px-2 py-2 rounded-lg bg-white">
                                        <a href="" className='flex gap-2 items-center hover:bg-slate-100 py-0.5 px-2 rounded-lg'><MdOutlineStickyNote2 size={20} /> Note</a>
                                        <a href="" className='flex w-full items-center gap-2 hover:bg-slate-100 py-0.5 px-2 rounded-lg'><MdOutlineAddTask size={20} />Task</a>
                                    </div>
                                ) 
                                : null
                            }
                        </li>
                        <li><a href="#" className="flex text-base py-0.5 px-2 rounded-lg hover:bg-slate-100">Features</a></li>
                        { !isAuthorized 
                            ? (
                            <a href="/login" className="md:ml-auto bg-black text-white font-semibold px-2 py-1 rounded-lg hover:bg-opacity-80 text-center">Login</a>)
                            : (
                                <div className='md:ml-auto relative hover:cursor-pointer md:hover:bg-slate-100 text-black px-2 py-1 rounded-lg' onMouseEnter={showAuthorizedMenu} onMouseLeave={showAuthorizedMenu} > 
                                     
                                    <div className='flex items-center justify-between gap-1'> <span className='flex items-center gap-1'><MdPerson2 size={20} /> username</span> <MdExpandMore size={16} className={isUserMenuExpanded ? 'rotate-180 transition-all' : 'transition-all'} /></div>
                                    <div className={ isUserMenuExpanded ? 'md:flex flex-col md:absolute top-full w-full rounded-md bg-white  py-1 text-black' : 'hidden' }>
                                        <li className='flex items-center gap-1 mx-2.5 my-1 px-1 py-1.5 rounded-lg hover:bg-slate-100'><MdOutlineHome size={20} />Dashboard</li>
                                        <li className='flex items-center justify-center gap-1 mx-2 my-1 p-1.5 text-center bg-black text-white rounded-lg hover:bg-opacity-80'><MdOutlineLogout size={20} /> Logout</li>
                                    </div> 
                                </div>
                            )
                        }
                    </ul>
                <span className='ml-auto md:hidden cursor-pointer' onClick={showMenu}>
                    { !isMenuExpanded 
                        ? (<MdOutlineMenu size={24} />)
                        : (<MdClose size={24} />)
                    }
                </span>
            </nav>
        </header>
    )
}
