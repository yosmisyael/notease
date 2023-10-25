import Modal from '@/components/layouts/Modal'
import useFetch from '@/hooks/useFetch'
import useLocalStorage from '@/hooks/useLocalStorage'
import useForm from '@/hooks/useForm'

export default function TagModal ({ handleClose, tags, setTags }) {

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))

    const { data } = useFetch(`/tags/${username}`)

    const { field, changeField, resetForm } = useForm(tags)

    function abortTag () {
        resetForm()
        handleClose()
    }

    function submitTag () {
        setTags(field)
        handleClose()
    }

    return (
        <Modal>
            <h1 className='text-2xl font-semibold mb-2 select-none'>Tag List</h1>
            <div className='flex flex-col max-h-28 overflow-y-scroll'>
            {
                data && data.map(item => ( 
                        <div key={item.id} className='inline-flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" id={item.id} value={item.tagName} onChange={changeField} checked={field.some(tag => tag.id === item.id)}  className='checked:accent-black cursor-pointer scale-110' />
                            <label htmlFor={item.id} className='text-md pb-1 select-none cursor-pointer'>{item.tagName}</label>
                        </div>
                    )
                )
            }            
            </div>

            <div className='flex justify-end gap-2 mt-4 select-none'>
                <button type='button' onClick={abortTag} className='cursor-pointer transition-all px-2 py-1 font-semibold rounded-lg border-2 border-opacity-0 hover:border-black hover:border-2'>cancel</button>
                <button onClick={submitTag} className='cursor-pointer bg-black text-white rounded-lg px-2 py-1 font-semibold hover:bg-opacity-80'>save</button>
            </div>
        </Modal>
    )
}
