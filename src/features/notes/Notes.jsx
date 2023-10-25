import { LuPenSquare } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import UserNavbar from '@/components/UserNavbar'
import useFetch from '@/hooks/useFetch'
import NoteCard from './components/NoteCard'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function Notes () {
    
    const navigate = useNavigate()

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))

    const { data: notes } = useFetch(`/notes`)

    return (
        <> 
            <UserNavbar pageName={'Note List'} />
            <main className='mx-4 md:mx-8 my-4'>

                {/* floated button */}
                <div onClick={() => navigate(`/@${username}/notes/create`)} className='fixed bottom-8 right-8 flex gap-2 items-center justify-center border-2 bg-white border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer select-none'>
                    <LuPenSquare size={20} /> <span className='font-semibold'>Write Note</span>
                </div>
                
                {/* note cards wrapper */}
                <section className='grid grid-rows-6 gap-4'>
                    
                    {/* note card */}
                    {
                        notes && notes.map(note => (
                            <NoteCard key={note.id} data={note} />
                        ))
                    }

                </section>
                {/* pagination */}
                <section className='flex justify-center mt-8'>
                    <nav className='mx-auto' aria-label='Page navigation example'>
                        <ul className='inline-flex -space-x-px text-sm'>
                            <li>
                            <a href='#' className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700'>Previous</a>
                            </li>
                            <li>
                            <a href='#' className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>1</a>
                            </li>
                            <li>
                            <a href='#' className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>2</a>
                            </li>
                            <li>
                            <a href='#' aria-current='page' className='flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'>3</a>
                            </li>
                            <li>
                            <a href='#' className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>4</a>
                            </li>
                            <li>
                            <a href='#' className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>5</a>
                            </li>
                            <li>
                            <a href='#' className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'>Next</a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </main>
        </>
    ) 
}
