import { useState } from 'react'
import { MdExpandCircleDown, MdOutlineStickyNote2, MdOutlineAddTask, MdOutlineLogout, MdSensorOccupied, MdOutlineNewLabel } from 'react-icons/md'
import useAuthService from '@/hooks/useAuthService'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function Dashboard () {

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))

    const [profileMenu, setProfileMenu] = useState(false)

    const [dropdownMenu, setDropDown] = useState(false)

    function expandMenu () {
        setDropDown(!dropdownMenu)
    }

    function expandProfileMenu () {
        setProfileMenu(!profileMenu)
    }

    function getTime () {
        const hour = new Date(Date.now()).getHours()
        switch (true) {
            case hour > 22:
                return 'night'
            case hour > 18:
                return 'evening'
            case hour > 12:
                return 'afternoon'
            default:
                return 'morning'
        }
    } 

    const { logout } = useAuthService()
    
    return (
        <main className="md:mx-32 mx-8 mt-8 select-none">
            <section className="border-b-2 border-b-black pb-4 flex justify-between items-center">
                <div>
                    <h1 className="md:text-4xl text-2xl font-semibold md:py-2">Good { getTime() }, { username }!</h1>
                    <p className="md:text-lg text-md">Let&apos;s start your journey today!</p>
                </div>
                <div className='relative rounded-full bg-gray-400 h-14 w-14 hover:cursor-pointer' onClick={expandProfileMenu}>
                    {/* <img src="" alt="profile picture" /> */}
                    {profileMenu && (
                        <ul className='absolute top-full right-1/2 w-max bg-white p-4 z-20 rounded-lg shadow-lg'>
                            <li className='mb-2 hover:text-black text-gray-500 py-0.5 flex items-center gap-1 font-semibold'><MdSensorOccupied size={20} />Edit Profile</li>
                            <li onClick={logout} className='font-semibold flex items-center gap-1 bg-black text-white rounded-lg py-0.5 px-2'><MdOutlineLogout size={20} /> Logout</li>
                        </ul>
                        )
                    }
                </div>  
            </section>
            
            <section className="grid md:grid-cols-2 my-2 gap-4">
                
                {/* features wrapper note */}
                <a href={`/@${username}/notes`} className="relative hover:cursor-pointer transition-all group shadow-lg rounded-lg">
                    <div className='relative z-10 py-5 px-8 flex justify-between items-center rounded-lg bg-white group-hover:bg-black group-hover:text-white'>
                        <h4 className="text-xl font-semibold flex gap-2 items-center"><MdOutlineStickyNote2 size={32} />Note</h4>
                        <MdExpandCircleDown className='-rotate-90 group-hover:rotate-0 transition-all' size={32} />
                    </div>
                    <div className='absolute top-0 px-8 py-5 w-full shadow-lg rounded-lg bg-black text-white scale-50 group-hover:top-3/4 group-hover:absolute group-hover:z-20 group-hover:scale-100 transition-all'>
                        <p>Create a note easily to write your ideas!</p>
                    </div>
                </a>
                
                {/* features wrapper task */}
                <a href={`/@${username}/tasks`} className="relative hover:cursor-pointer transition-all group shadow-lg rounded-lg" onMouseEnter={expandMenu} onMouseLeave={expandMenu}>
                    <div className='relative z-10 py-5 px-8 flex justify-between items-center rounded-lg bg-white group-hover:bg-black group-hover:text-white'>
                        <h4 className="text-xl font-semibold flex gap-2 items-center"><MdOutlineAddTask size={32} />Task</h4>
                        <MdExpandCircleDown className='-rotate-90 group-hover:rotate-0 transition-all' size={32} />
                    </div>
                    <div className='absolute top-0 px-8 py-5 w-full shadow-lg rounded-lg bg-black text-white scale-50 group-hover:top-3/4 group-hover:absolute group-hover:z-20 group-hover:scale-100 transition-all'>
                        <p>Make your goal clearer to easily track and achieve them with Task!</p>
                    </div>
                </a>
                
                {/* features wrapper tag */}
                <a href={`/@${username}/tags`} className="relative hover:cursor-pointer transition-all group shadow-lg rounded-lg">
                    <div className='relative z-10 py-5 px-8 flex justify-between items-center rounded-lg bg-white group-hover:bg-black group-hover:text-white'>
                        <h4 className="text-xl font-semibold flex gap-2 items-center"><MdOutlineNewLabel size={32} />Tag</h4>
                        <MdExpandCircleDown className='-rotate-90 group-hover:rotate-0 transition-all' size={32} />
                    </div>
                    <div className='absolute top-0 px-8 py-5 w-full shadow-lg rounded-lg bg-black text-white scale-50 group-hover:top-3/4 group-hover:scale-100 transition-all'>
                        <p>Organize all your works easily with Task!</p>
                    </div>
                </a>
                
            </section>
        </main>
    )

}
