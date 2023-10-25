import { useState } from 'react'
import { MdDashboard, MdChevronRight, MdSearch, MdClose } from 'react-icons/md'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function UserNavbar ({ pageName }) {

    const [searchBar, setSearchBar] = useState(false)

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))

    function showSearchBar () {
        setSearchBar(!searchBar)
    }

    return (
        <header className="relative w-full border-b py-4 px-8 flex justify-between">

            {/* breadcrumbs */}
            <nav className="flex select-none" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href={`/@${username}`} className="inline-flex gap-1 items-center text-sm font-medium text-black hover:text-gray-700">
                        <MdDashboard size={20} />
                        Dashboard
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <MdChevronRight size={20} />
                        <a href="#" className="ml-1 text-sm font-medium text-black hover:text-gray-700 md:ml-2">{ pageName }</a>
                    </div>
                </li>
            </ol>
            </nav>
            {!searchBar && <span className='cursor-pointer' onClick={showSearchBar}><MdSearch size={20} /></span>}
            { (searchBar && pageName === 'Note List') && (
                <div className='flex gap-2 '>
                    <input type="text" className='outline-none border-b-2' autoFocus/>
                    <span className='cursor-pointer hover:bg-gray-300 flex items-center rounded-full w-5 h-5' onClick={showSearchBar}><MdClose size={18} /></span>
                </div>
            ) }
            
        </header>
    )
}
