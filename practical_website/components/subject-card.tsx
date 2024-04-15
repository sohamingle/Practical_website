import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SubjectCardProps{
    subjectName: string;
    subjectLogo:StaticImport;
    link:string;
    subjectClass:string;
}

const SubjectCard:React.FC<SubjectCardProps> = ({subjectName,subjectClass,subjectLogo,link}) => {
    return (
        <Link href={`/${link}`}>
            <Card className="p-3">
                <div className="flex">
                    <Image src={subjectLogo} alt={link} width={65} className="w-auto"/>
                    <CardBody>
                        <p>{subjectName}</p>
                        <p className="text-xs text-gray-400">{subjectClass}</p>
                    </CardBody>
                </div>
            </Card>
        </Link>
    );
}

export default SubjectCard;