import Modal from '@/components/layouts/Modal'
import useForm from '@/hooks/useForm'
import usePost from '@/hooks/usePost'

function CreateModal ({ toggleModal, refetch }) {

    const { store } = usePost()

    const { field, changeField } = useForm({
        tagName: ''
    })

    async function handleSave () {
        await store('/tags', field)
        refetch()
        toggleModal()
    }

    function handleClose () {
        toggleModal()
    }

    return (
        <Modal>
            <h1 className='text-2xl font-semibold mb-2 select-none'>Create New Tag</h1>
            <form action="" method="post">
                <input type="text" onChange={changeField} name='tagName' autoFocus placeholder='write your tag name here ...' className='outline-none border-b border-black w-full' />
            </form>
            <div className='flex justify-end gap-2 mt-4 select-none'>
                <span className='cursor-pointer transition-all px-2 py-1 font-semibold rounded-lg border-2 border-opacity-0 hover:border-black hover:border-2' onClick={handleClose}>cancel</span>
                <span className='cursor-pointer bg-black text-white rounded-lg px-2 py-1 font-semibold hover:bg-opacity-80' onClick={handleSave}>save</span>
            </div>
        </Modal>
    )
}

export default CreateModal