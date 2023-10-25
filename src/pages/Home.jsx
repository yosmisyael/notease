import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import icon from '@/assets/icon.svg'
import { FcIdea, FcBullish } from 'react-icons/fc'

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <main className='container grid grid-flow-row min-h-screen w-full place-items-start select-none'>
                <div className='max-w-xl md:max-w-2xl place-self-center md:pt-24'>
                    <h1 className='text-5xl md:text-6xl text-center font-bold'><u>Capture</u>, <u>Organize</u>, and <u>Unleash</u> Your Ideas!</h1>
                    <p className='mx-auto text-lg md:text-xl max-w-xs text-center mt-4'>
                        Keep capturing your ideas with this app full of creativity<FcIdea className='inline' size={20} /> and productivity<FcBullish className='inline' size={20} />
                    </p>
                </div>
                <div className='mx-auto'>
                    <img src={icon} className='max-w-l md:max-w-6xl' alt="icon" />
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )   
}
