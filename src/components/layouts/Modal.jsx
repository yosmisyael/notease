export default function Modal ({ children }) {
    return (
        <section className='fixed top-0 left-0 w-full h-full grid grid-cols-1 px-8 md:px-0 bg-black bg-opacity-60'>
            <div className='md:w-1/4 w-full bg-white text-black p-6 rounded-lg place-self-center'>
                {children}
            </div>
        </section>
    )
}
