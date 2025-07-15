"use client"

import {AlignJustify, ChevronDown} from "lucide-react";
import {useEffect, useState} from "react";

export default function Header() {
    const [dropDown, setDropDown] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
       function handleResize() {
           setScreenWidth(window.innerWidth);
       }

       window.addEventListener('resize', handleResize);

       handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navbar">
            <div className="flex gap-6">
                {/* brand */}
                <div className="">
                    <h3 className="font-bold text-2xl font-secondary">Notease</h3>
                </div>

                {/* dropdown */}
                {
                    ((mobileMenu && screenWidth < 1024) || screenWidth >= 1024) && (
                        <ul className="dropdown top-0 left-0 bottom-0 w-full">
                        <li><a href="">Get Started</a></li>
                        <li className="inline-flex flex-col gap-5">
                            <span className="inline-flex items-center gap-2 hover:cursor-pointer" onClick={() => setDropDown(!dropDown)}>
                                Features
                                <ChevronDown size={24} strokeWidth={3} className={`pt-[6px] transition-all duration-200 ease-out ${dropDown ? 'rotate-180 translate-y-1' : ''}`}/>
                            </span>
                            { dropDown && (
                                <ul className="relative lg:absolute lg:bg-background lg:top-[100%] lg:translate-y-7 flex flex-col gap-8 text-2xl lg:text-xl font-bold font-primary [&>:first-child]:pt-4 lg:[&>:first-child]:pt-0 px-4 lg:px-3 lg:py-2 lg:rounded-lg lg:border-2 lg:border-primary">
                                    <li>Note</li>
                                    <li>Tag</li>
                                    <li>Secure note</li>
                                </ul>
                            ) }
                        </li>
                        <li><a href="">How it Works?</a></li>
                        <li><a href="">Contribute</a></li>
                    </ul>
                    )
                }
            </div>

            {/* cta */}
            <div className="flex gap-2 relative z-10">
                <a href="" className="hidden md:block btn-primary">Sign up</a>
                <a href="" className="hidden md:block btn-secondary">Log in</a>
                <a href="" className="md:hidden btn-primary">Get Notease</a>
                <button type="button" className="lg:hidden hover:cursor-pointer" onClick={() => setMobileMenu(!mobileMenu)}>
                    <AlignJustify />
                </button>
            </div>
        </nav>
    )
}