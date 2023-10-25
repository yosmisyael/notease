import useTime from '@/hooks/useTime'
import useFetch from '@/hooks/useFetch'
import useLocalStorage from '@/hooks/useLocalStorage'

export default function NoteCard ({ data }) {
    
    const { convert } = useTime()

    const { data: tags } = useFetch(`/notes/${data.id}/tags`)

    const { getItem } = useLocalStorage()

    const { username } = JSON.parse(getItem('user'))

    return (
        <a href={`/@${username}/notes/${data.id}`} key={data.id} className='md:mx-4 px-8 py-4 border border-l-4 border-l-black rounded-r-lg shadow-lg select-none cursor-pointer'>
            <h2 className='md:text-md'>{convert(data.createdAt)}</h2>
            <h1 className='text-3xl md:text-4xl font-semibold mb-1'>{data.title}</h1>
            {
                Array.isArray(tags) && tags.length > 0 && (<div className='flex gap-1 mb-1 items-center'>
                    {
                        tags && tags.map(({ id, tagName}) => (
                            <span key={id} className='rounded-md bg-black text-white py-0.5 px-1 hover:cursor-pointer'>{ tagName }</span>
                        ) )
                    }
                </div>)
            }
            <div dangerouslySetInnerHTML={{ __html: data.body }} className='mb-4'></div>
            <span className='text-sm italic text-gray-800 font-semibold'>last updated at {convert(data.updatedAt)}</span>
        </a>
    )
}