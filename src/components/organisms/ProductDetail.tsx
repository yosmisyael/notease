import Intro from "@/components/molecules/Intro";
import Feature from "@/components/molecules/Feature";
import Trivia from "@/components/molecules/Trivia";
import Contribute from '@/components/molecules/Contribute';

export default function ProductDetail() {
    return (
        <section className="px-5 mt-32 lg:px-20 xl:px-40">
            <Intro />
            <Feature />
            <Trivia />
            <Contribute />
        </section>
    )
}