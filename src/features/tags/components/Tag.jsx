import { MdModeEditOutline, MdOutlineCheck, MdClose } from 'react-icons/md'
import { BsFillTrashFill } from 'react-icons/bs'
import { useRef, useEffect, useState } from 'react'
import useDelete from '@/hooks/useDelete'
import useForm from '@/hooks/useForm'
import useUpdate from '@/hooks/useUpdate'

function Tag ({ value, id, refetch }) {

    const [editMode, setEditMode] = useState(false)
    
    const { destroy } = useDelete(`/tags/${id}`)

    const { update } = useUpdate()

    const { field, changeField, resetForm } = useForm({
        tagName: value
    })

    const ref = useRef(null)

    function edit () {
        setEditMode(!editMode)
    }

    function discardChange () {
        resetForm()
        edit()
    }

    async function handleUpdate () {

        const result = await update(`/tags/${id}`, field)
        
        if (result.data) {
            edit()
        } 

        if (result.error) {
            console.log(result.error)
        }
        
    }

    async function handleDelete () { 

        const result = await destroy(`/tags/${id}`)
        
        if (result.data) {
            refetch()
        }

        if (result.error) {
            console.log(result.error)
        }
    }

    useEffect(() => {

        if (editMode && ref.current) ref.current.focus()
    
    }, [editMode])

    return (
        <div className='flex border items-center justify-between px-4 py-4 rounded-lg shadow-md'>
            <input type='text' value={field.tagName} name='tagName' onChange={changeField} ref={ref} readOnly={!editMode && true}  className={`outline-none w-full ${editMode ? '' : 'cursor-default'}`} />
            
            {!editMode 
            ? (
                <span className='flex gap-2'>
                    <span onClick={edit} className='flex justify-center items-center w-7 h-7 rounded-full hover:bg-black hover:text-white cursor-pointer'><MdModeEditOutline /></span>
                    <span onClick={handleDelete} className='flex justify-center items-center w-7 h-7 rounded-full hover:bg-black hover:text-white cursor-pointer'><BsFillTrashFill /></span>
                </span>
            ) : (
                <span className='flex gap-2'>
                    <span onClick={handleUpdate} className='flex justify-center items-center w-7 h-7 rounded-full hover:bg-black hover:text-white cursor-pointer'><MdOutlineCheck /></span>
                    <span onClick={discardChange} className='flex justify-center items-center w-7 h-7 rounded-full hover:bg-black hover:text-white cursor-pointer'><MdClose /></span>
                </span>
            )}
        </div>
    )
}

export default Tag