import {JSX} from "react";
import Note from "@/components/atoms/icons/Note";
import Directory from "@/components/atoms/icons/Directory";
import Tag from "@/components/atoms/icons/Tag";
import {MoveRight} from "lucide-react";

export default function Feature() {
    const features: { title: string; description: string, icon: () => JSX.Element }[] = [
        {
            title: 'Effortless Note Taking',
            description: 'Capture your ideas quickly and easily with\n' +
                'LucidNote’s intuitive note-taking platform — perfect\n' +
                'for anything from quick reminders to detailed\n' +
                'thoughts.',
            icon: Note,
        },
        {
            title: 'Custom Tags',
            description: 'Create custom tags to categorize your notes and\n' +
                'make them instantly searchable, so you can always\n' +
                'find exactly what you need.',
            icon: Tag,
        },
        {
            title: 'Smart Organization',
            description: 'Organize your notes by tags to keep everything in\n' +
                'order and easily accessible — no more digging\n' +
                'through endless pages.',
            icon: Directory,
        },
    ];
    return (
        <div className="grid grid-cols-9 w-full mt-20">
            {
                features.map(({ title, description, icon: Icon }, index) => (
                    <div className="col-span-3 group" key={index}>
                        <Icon />
                        <h4 className="inline-flex gap-1 items-center text-xl lg:text-2xl font-bold">
                            {title}
                            <MoveRight className="translate-y-1 group-hover:translate-x-2 transition-transform duration-200 ease-out" />
                        </h4>
                        <p className="text-base md:text-lg md:max-w-[38ch]">{description}</p>
                    </div>
                ))
            }
        </div>
    )
}