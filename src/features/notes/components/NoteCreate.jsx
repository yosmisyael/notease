import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MdOutlineNewLabel, MdChevronLeft, MdOutlineCheck } from 'react-icons/md'
import TextEditor from './TextEditor'
import Navlink from './layouts/Navlink'
import TagModal from './TagModal'
import useForm from '@/hooks/useForm'
import usePost from '@/hooks/usePost'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function NoteCreate () {
    
    const [modal, setModal] = useState(false)

    const [tags, setTags] = useState([])
    
    const navigate = useNavigate()

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))

    const { store } = usePost()
    
    const { field, changeField } = useForm({
        title: 'Untitled',
        body: ''
    })

    function navigateDashboard () {
        navigate(`/@${username}/notes`)
    }

    function showModal () {
        setModal(!modal)
    }

    async function submitNote () {

        const result = await store('/notes', field)
        
        if (result.data) {
            
            const noteId = result.data.id

            if (tags.length !== 0) {    

                const selectedTag = tags.map(({ id }) => id)

                await store(`/notes/${noteId}/tags`, { selectedTag })

            }

            navigate(`/@${username}/notes/${noteId}`)

        }

        if (result.error) console.log(result.error)
    }

    return (
        <main>
        
            <Navlink>
                <span onClick={navigateDashboard} className='md:ml-4 md:mt-4 flex items-center justify-center rounded-full bg-black text-white p-0.5 w-10 h-10 hover:cursor-pointer'><MdChevronLeft size={30} /></span>
                <span onClick={submitNote} className='md:ml-4 md:mt-4 flex items-center justify-center rounded-full bg-black text-white p-0.5 w-10 h-10 hover:cursor-pointer' ><MdOutlineCheck size={30} /></span>
            </Navlink>

            {/* title */}
            <div className='md:w-1/2 w-full mx-auto flex justify-center my-4 mb-2'>
                <input type='text' name='title' onChange={changeField} placeholder='Untitled' className='w-full px-4 md:px-0 text-2xl md:text-4xl font-semibold outline-none' />
            </div>
            <div className='mx-auto w-full pl-4 md:pl-0 mb-4 md:w-1/2'>
                <span onClick={showModal} className='inline-flex items-center px-2 py-1 cursor-pointer rounded-lg hover:bg-black hover:text-white select-none'><MdOutlineNewLabel size={20} /> Add Tag</span>
            </div>
            
            {/* tags container */}
            <div className='md:w-1/2 w-full pl-4 md:pl-0 flex items-center mx-auto my-4 select-none gap-1'>
            {
                tags && tags.map(({ tagName, id }) => (
                    <span key={id} className='bg-black text-white px-2 py-1 rounded-lg'>{tagName}</span>
                ))
            }
            </div>
            
            {/* text editor */}
            <TextEditor field={field} />

            {modal && <TagModal handleClose={showModal} setTags={setTags} tags={tags} />}
        
        </main>
    )
}
