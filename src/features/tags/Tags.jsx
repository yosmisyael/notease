import React, { useState } from 'react'
import { LuPenSquare } from 'react-icons/lu'
import UserNavbar from '@/components/UserNavbar'
import Tag from './components/Tag'
import CreateModal from './components/CreateModal'
import useFetch from '@/hooks/useFetch'
import useLocalStorage from '@/hooks/useLocalStorage'

function Tags () {

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))

    const { data, show } = useFetch(`/tags/${username}`)

    const [modal, setModal] = useState(false)

    function toggleModal () {
        setModal(!modal)
    }

    return (
        <React.Fragment>
            <UserNavbar pageName={'Tag List'} />

            <main className='md:mx-32 mx-8 mt-8'>
                <h1 className='px-4 py-2 text-2xl md:text-4xl font-semibold select-none border-b-2 border-black'>Tag List</h1>
                {/* tag container */}
                <section className='flex flex-col gap-2 my-4'>
                    { data && data.map((item) => {
                        return (
                            <Tag key={item.id} id={item.id} value={item.tagName} refetch={show} />
                        )
                    }
                    ) }
                </section>
            </main>

            {/* floating button */}
            <div onClick={toggleModal}  className="fixed bottom-8 right-8 flex gap-2 items-center justify-center border-2 bg-white border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer select-none">
                <LuPenSquare size={20} /> <span className="font-semibold">Create Tag</span>
            </div>
            
            {modal && <CreateModal toggleModal={toggleModal} refetch={show} />}
        </React.Fragment>
    )
}

export default Tags