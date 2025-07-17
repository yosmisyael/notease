import Collaboration from "@/components/atoms/Collaboration";

export default function Hero() {
    return (
        <section className="mt-14 flex flex-col items-center gap-7 w-full">
            <div className="w-fit text-center">
                <h1 className="max-w-[22ch] text-3xl md:text-6xl font-black underline">Capture, Organize, and Unleash Your Ideas!</h1>
                <p className="max-w-[30ch] mx-auto text-lg md:text-xl font-semibold pt-8">A powerful, feature-rich, open-source note-taking solution.</p>
            </div>
            <div>
                <Collaboration />
            </div>
        </section>
    )
}