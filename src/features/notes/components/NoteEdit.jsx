import { useState, useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MdOutlineNewLabel, MdChevronLeft, MdOutlineCheck } from 'react-icons/md'
import TextEditor from './TextEditor'
import Navlink from './layouts/Navlink'
import TagModal from './TagModal'
import useFetch from '@/hooks/useFetch'
import useUpdate from '@/hooks/useUpdate'
import useLocalStorage from '@/hooks/useLocalStorage'
import ACTION from '@/config/constants'

function reducer (state, action) {

    switch (action.type) {
        case ACTION.CHANGE_TITLE:
            return { ...state, title: action.newTitle }
        case ACTION.CHANGE_BODY:
            return { ...state, body: action.newBody }
        default:
            return state
    }

}

export default function NoteEdit () {
    
    const { id } = useParams()

    const navigate = useNavigate()

    const [data, dispatch] = useReducer(reducer, { title: '', body: '' })

    const [tags, setTags] = useState([])

    const [modal, setModal] = useState(false)

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))
    
    const { data: note } = useFetch(`/notes/${id}`)

    const { data: tagsData } = useFetch(`/notes/${id}/tags`)

    const { update } = useUpdate()

    function showModal () {
        setModal(!modal)
    }

    useEffect(() => {
        
        if (note) {
            dispatch({ type: ACTION.CHANGE_TITLE, newTitle: note.title })
            dispatch({ type: ACTION.CHANGE_BODY, newBody: note.body })
        }

        if (tagsData) {
            setTags(tagsData)
        }

    }, [note, tagsData])

    function handleChange (e) {
        dispatch({
            type: ACTION.CHANGE_TITLE,
            newTitle: e.target.value 
        })
    }

    async function updateNote () {

        const result = await update(`/notes/${id}`, data)

        
        if (result.data) {
            
            const noteId = result.data.id

            if (tags) {    

                const selectedTag = tags.length > 0 ? tags.map(({ id }) => id) : []

                await update(`/notes/${noteId}/tags`, { selectedTag })

            }

            navigate(`/@${username}/notes/${noteId}`)

        }

        if (result.error) console.log(result.error)
    }

    return (
        <>

            <Navlink>
                <span className='flex items-center justify-center rounded-full bg-black text-white p-0.5 w-10 h-10 hover:cursor-pointer'>
                    <MdChevronLeft size={30} onClick={() => navigate(`/@${username}/notes`)} />
                </span>
                <span className='md:ml-4 md:mt-4 flex items-center justify-center rounded-full bg-black text-white p-0.5 w-10 h-10 hover:cursor-pointer' >
                    <MdOutlineCheck size={30} onClick={updateNote} />
                </span>
            </Navlink>
            { note && (
                <main>
                    <div className='md:w-1/2 w-full mx-auto flex justify-center my-4'>
                        <input type='text' name='title' placeholder='Untitled' value={data.title} onChange={handleChange} className='w-full pl-4 md:pl-0 text-4xl font-semibold outline-none' />
                    </div>

                    <div className='mx-auto w-full pl-4 md:pl-0 md:w-1/2'>
                        <span className='inline-flex items-center px-2 py-1 cursor-pointer rounded-lg border-2 border-black hover:bg-black hover:text-white select-none' onClick={showModal}>
                            <MdOutlineNewLabel size={20} /> Add Tag
                        </span>
                    </div>

                    {/* tags container */}
                    <div className='md:w-1/2 w-full pl-4 md:pl-0 flex items-center mx-auto my-4 gap-1 select-none'>
                        {
                            tags && tags.map(({ id, tagName }) => (
                                <span key={id} className='bg-black text-white px-2 py-1 rounded-lg'>{tagName}</span>
                            ))
                        }
                    </div>
                    
                    <TextEditor field={data} dispatch={dispatch} />
                </main>
            )}
            
            {modal && <TagModal handleClose={showModal} tags={tags} setTags={setTags} />}
        
        </>
    )
}
