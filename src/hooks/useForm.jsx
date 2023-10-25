import { useState } from 'react'

export default function useForm (initialValue) {

    const [field, setField] = useState(initialValue)
    
    function changeField (event) {
        
        const { name, type, value, checked, id } = event.target
        
        setField(prevFields => {

            if (type === 'checkbox') {
                
                if (checked) {
                    
                    return [...prevFields, { tagName: value, id }]
                
                }

                return prevFields.filter(field => field.id !== id)

            } else {
                
                return { ...prevFields, [name]: value}
    
            }
        })
        

    }

    function resetForm () {
        
        setField(initialValue)

    }

    return { field, changeField, resetForm }

}