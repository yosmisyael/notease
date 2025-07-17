import Target from "@/components/atoms/icons/Target";
import Idea from "@/components/atoms/icons/Idea";
import Lock from "@/components/atoms/icons/Lock";
import {JSX} from "react";

export default function Intro() {
    const benefits: { title: string; description: string, icon: () => JSX.Element }[] = [
        {
            title: 'Fast & Intuitive',
            description: 'Notease is built to be quick and easy, so you can focus on your ideas, not the app. Create, edit, and organize your notes with just a few clicks.',
            icon: Target,
        },
        {
            title: 'Beautiful & Minimal',
            description: 'A clean, distraction-free interface means your notes are the center of attention. Focus on your thoughts, not the clutter.',
            icon: Idea,
        },
        {
            title: 'Open-Source',
            description: 'Notease is completely open-source, meaning it\'s free to use, contribute to, and modify. You can shape the app to fit your exact needs.',
            icon: Lock,
        }
    ];
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 lg:pr-10 mb-auto">
                <h2 className="section-header">Get Started</h2>
                <p className="text-base md:text-xl">
                    Welcome to <b>Notease</b> – the open-source, lightweight note-taking app designed for simplicity, speed, and flexibility. Whether you&#39;re a student, a professional, or a creative thinker, Notease is here to help you capture and organize your thoughts like never before.
                </p>
                <div className="quotes">
                    “Experience note-taking like never before with Notease.”
                </div>
            </div>
            <ul className="lg:w-1/2 flex flex-col gap-5 mt-20 lg:mt-0 lg:pl-10">
                {
                    benefits.map(({ title, icon: Icon, description}, index) => (
                        <li key={index} className="grid grid-cols-4 gap-5 md:gap-0">
                            <span className="col-span-4 md:col-span-1 justify-self-center self-center order-2 md:order-1">
                                <Icon/>
                            </span>
                            <div className="col-span-4 md:col-span-3 order-1 md:order-2">
                                <h4 className="text-xl lg:text-2xl font-bold">{title}</h4>
                                <p className="text-base md:text-lg">{description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}