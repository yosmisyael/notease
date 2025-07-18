import {JSX} from "react";
import Laptop from "@/components/atoms/icons/Laptop";
import Plane from "@/components/atoms/icons/Plane";
import Upload from "@/components/atoms/icons/Upload";

export default function Contribute() {
    const hows: { title: string; description: string, icon: () => JSX.Element }[] = [
        {
            title: 'Fork the Repository',
            description: 'Start by forking our GitHub repo and cloning it to your local machine.',
            icon: Laptop,
        },
        {
            title: 'Submit an Issue',
            description: 'Report bugs, request new features, or submit feedback by opening a new issue on our GitHub. Your input is invaluable to us!',
            icon: Plane,
        },
        {
            title: 'Submit a Pull Request',
            description: 'Submit a pull request with a detailed description of the changes you made. Be sure to run tests and follows our style guidelines.',
            icon: Upload,
        }
    ];
    return (
        <div className="grid grid-cols-8 mt-20 gap-y-4">
            <div className="col-span-8 lg:col-span-4 flex flex-col gap-2">
                <h2 className="section-header">Contribute</h2>
                <p className="text-base md:text-xl">We’d love for you to contribute and help make LucidNote even better! Whether you’re fixing bugs, adding new features, or improving documentation, your contributions are highly valued.</p>
                <h4 className="text-2xl font-bold">Ready to Contribute?</h4>
                <a href="" className="btn-secondary w-fit mt-1">github.com/notease</a>
            </div>
            <div className="col-span-8 lg:col-span-4">
                {
                    hows.map(({ title, description, icon: Icon}, index) => (
                        <div key={index} className="grid grid-cols-4 gap-x-2 mb-4">
                            <span className="col-span-1 block justify-self-center self-center lg:self-start">
                                <Icon />
                            </span>
                            <div className="col-span-3">
                                <h3 className="text-xl lg:text-2xl font-bold">
                                    {title}
                                </h3>
                                <p className="text-base md:text-lg">{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}