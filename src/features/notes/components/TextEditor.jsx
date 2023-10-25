import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import '../assets/custom.quill.css'
import ACTION from '@/config/constants'

export default function TextEditor ({ field, dispatch }) {

    function handleChange (content) {
        
        if (dispatch) {
            dispatch({ type: ACTION.CHANGE_BODY, newBody: content })
        } else {
            field.body = content
        }
    }

    return <ReactQuill theme='snow' value={field.body} onChange={ handleChange } placeholder='write note here ...' className='md:w-1/2 w-full mx-auto text-center' />
}
