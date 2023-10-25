import { MdChevronLeft, MdModeEditOutline } from 'react-icons/md'
import { BsFillTrashFill } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'  
import Navlink from './layouts/Navlink'
import useFetch from '@/hooks/useFetch'
import useTime from '@/hooks/useTime'
import useDelete from '@/hooks/useDelete'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function NoteView () {
    
    const { convert } = useTime()

    const { id } = useParams()

    const { destroy } = useDelete()

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))

    const navigate = useNavigate()

    function navigateDashboard () {
        navigate(`/@${username}/notes`)
    }

    function navigateEdit () {
        navigate(`/@${username}/notes/${id}/edit`)
    }

    const { data: note } = useFetch(`/notes/${id}`)

    const { data: tags } = useFetch(`/notes/${id}/tags`)

    async function handleDelete () { 

        const result = await destroy(`/notes/${id}`)
        
        if (result.data) {
            navigate(`/@${username}/notes`)
        }

        if (result.error) {
            console.log(result.error)
        }
    }

    return (
        <>
            <Navlink className='fixed top-0 right-0 left-0 ml-3 mr-3 md:ml-12 md:mr-12 mt-4 flex gap-2'>
                <span className='flex items-center justify-center rounded-full bg-black text-white p-0.5 w-10 h-10 hover:cursor-pointer' onClick={navigateDashboard}><MdChevronLeft size={30} /></span>            
                <div className='ml-auto flex gap-2'>
                    <span className='flex items-center justify-center rounded-full hover:bg-black hover:text-white p-0.5 hover:cursor-pointer w-10 h-10' onClick={navigateEdit}><MdModeEditOutline size={22} /></span>
                    <span onClick={handleDelete} className='flex items-center justify-center rounded-full hover:bg-black hover:text-white p-0.5 hover:cursor-pointer w-10 h-10'><BsFillTrashFill size={22} /></span>
                </div>
            </Navlink>            
            { 
            note && (
            <main className='mx-4 md:mx-60 md:my-16'>
                <h1 className='text-3xl md:text-4xl py-2 font-semibold'>{note.title}</h1>
                <div className='flex gap-1'>
                    {
                        tags && tags.map(({ id, tagName }) => (
                            <span key={id} className='flex items-center rounded-lg px-2 py-1 text-white bg-black'>{tagName}</span>
                        ))
                    }
                </div>
                <p className='italic font-thin py-2'>last edited {convert(note.updatedAt)}</p>
                <div dangerouslySetInnerHTML={{ __html: note.body }} className='mb-4 mt-2'>
                    
                </div>
            </main>
            )
            }
        </>
    )
}
