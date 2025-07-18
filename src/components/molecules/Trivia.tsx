import {JSX} from "react";
import Box from '@/components/atoms/icons/Box';
import Puzzle from '@/components/atoms/icons/Puzzle';
import Node from '@/components/atoms/icons/Node';
import Key from '@/components/atoms/icons/Key';

export default function Trivia() {
    const trivias: { title: string; description: string, icon: () => JSX.Element}[] = [
        {
            title: 'Modular, Open, and Secure',
            description: 'Our decoupled, open-source architecture with self-hosting options gives you complete control, customization, and ownership of your data.',
            icon: Box
        },
        {
            title: 'Simple Implementation',
            description: 'Easy installation, cross-platform access, and community support make getting started a breeze.',
            icon: Puzzle,
        },
        {
            title: 'Innovative Approach',
            description: 'We combine open source, flexible architecture, and self-hosting to empower you to take notes your way.',
            icon: Node,
        },
        {
            title: 'Data Ownership & Security',
            description: 'Self-hosting gives you complete privacy, security, and portability for your notes, putting you in control.',
            icon: Key,
        },
    ];
    return (
        <div className="grid grid-cols-8 mt-20 md:px-14 lg:px-0 gap-5">
            <div className="col-span-8 flex flex-col gap-2">
                <h2 className="section-header">How It Works?</h2>
                <p className="text-base md:text-xl max-w-[94ch]">
                    We believe note-taking should be seamless, intuitive, and tailored to your needs.  That&#39;s why we built this open-source note application with a flexible, powerful architecture designed for everyone. Here&#39;s a peek under the hood:
                </p>
            </div>
            {trivias.map(({title, description, icon: Icon}, index) => (
                <div key={index} className="col-span-8 sm:col-span-4">
                    <Icon/>
                    <h4 className="text-xl lg:text-2xl font-bold">
                        {title}
                    </h4>
                    <p className="text-base md:text-lg max-w-[51ch]">
                        {description}
                    </p>
                </div>
            ))}
            <div className="col-span-8 w-fit justify-self-center bg-gray-200 text-center p-2 pb-4 md:p-5 rounded-lg">
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-3">Simple Implementation: Get Started in Minutes</h3>
                <p className="text-lg md:text-2xl text-center max-w-[31ch] mx-auto mb-2 md:mb-3">Setting up your own note-taking haven is easier than you think!</p>
                <a href="/documentation" className="btn-secondary">Documentation</a>
            </div>
        </div>
    );
}