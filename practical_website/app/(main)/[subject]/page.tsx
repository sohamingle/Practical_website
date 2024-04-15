import { data } from '@/providers/data'
import { Card, CardHeader } from '@nextui-org/card';
import { ArrowBigLeftIcon, Laptop2Icon } from 'lucide-react';
import Link from 'next/link';

const SubjectPage = ({ params: { subject } }: { params: { subject: string } }) => {
    return (
        <div className="p-5">
            <div className="text-xl font-bold mb-5 flex items-center"><Link href={`/`}><ArrowBigLeftIcon/></Link> Select Experiment</div>
            <div className='grid gap-3 grid-cols-1 sm:grid-cols-2'>
                {data[subject].map(obj => (
                    <Link key={obj.value} href={`/${subject}/${obj.value}`}>
                        <Card className='px-2'>
                            <CardHeader className='gap-x-3'><Laptop2Icon />
                                {obj.name}
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SubjectPage;