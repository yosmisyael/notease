import Logo from '@/components/atoms/Logo';
import {Github, Instagram, Youtube} from "lucide-react";

export default function Footer() {
    return (
        <footer className="grid grid-cols-12 gap-y-4 gap-x-2 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 py-10 mt-10 border-t-2 border-primary">
            <div className="flex flex-col gap-y-4 col-span-6 md:col-span-3">
                <Logo size={3} />
                <div className="flex gap-3">
                    <Instagram />
                    <Youtube />
                    <Github />
                </div>
                <h6>
                    ©2025 Notease <br/>
                    by <a href="https://github.com/yosmisyael">@yosmisyael</a>
                </h6>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-y-4">
                <h6 className="font-bold">Developer</h6>
                <a href="">About</a>
                <a href="">Term&#39;s and Policy</a>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-y-4">
                <h6 className="font-bold">Resources</h6>
                <a href="">Community</a>
                <a href="">Github Repository</a>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-y-4">
                <h6 className="font-bold">Contact</h6>
                <a href="">Email</a>
            </div>
        </footer>
    );
}