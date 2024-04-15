import { ArrowBigLeftIcon } from "lucide-react";
import ExperimentForm from "./components/experiment-form";
import Link from "next/link";

const ExperimentPage = ({ params: { subject, experiment } }: { params: { subject: string, experiment: string } }) => {
    return (
        <div className="p-5">
            <p className="text-xl font-bold mb-5 flex items-center"><Link href={`/${subject}`}><ArrowBigLeftIcon /></Link> Enter your details</p>
            <ExperimentForm experiment={experiment} />
        </div>
    );
}

export default ExperimentPage;