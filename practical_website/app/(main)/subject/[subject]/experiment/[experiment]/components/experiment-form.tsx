"use client"

import { CustomRadio } from "@/components/custom-radio";
import { Button, Input, RadioGroup } from "@nextui-org/react";
import axios from "axios";
import fileDownload from "js-file-download";
import { FileDownIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ExperimentForm = ({ experiment }: { experiment: string }) => {

    const [loading,setLoading] = useState(false)

    const router = useRouter()
    const params = useParams()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            setLoading(true)
            const formData = new FormData(e.currentTarget)
            if (formData.get("name") === "" || formData.get("rollNo") === "" || !formData.get("class") || !formData.get("batch")) {
                toast.error("Please fill all the details")
            }
            const { data } = await axios.post('/api/download', {
                name: formData.get("name"),
                roll_no: formData.get("rollNo"),
                classNo: formData.get("class"),
                batch: formData.get("batch"),
                file: formData.get("file"),
                experiment
            },{responseType:"blob"})
            fileDownload(data, `${formData.get("name")}_${experiment}.docx`)
            router.push(`/subject/${params.subject}`)
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong")
        }finally{
            setLoading(false)
        }

    }

    return (
        <div>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="flex md:flex-row flex-col gap-4">
                <label>
                    Name <span className="text-red-500">*</span>
                    <Input name="name" variant="bordered" placeholder="Enter name" size="sm" isRequired />
                </label>
                <label>
                    Roll No <span className="text-red-500">*</span>
                    <Input name="rollNo" variant="bordered" type="number" placeholder="Enter roll no" size="sm" isRequired />
                </label>
                </div>
                <RadioGroup name="class" label="Class" orientation="horizontal" size="sm" isRequired >
                    <CustomRadio value="Et-1">
                        Et-1
                    </CustomRadio>
                    <CustomRadio value="Et-2">
                        Et-2
                    </CustomRadio>
                </RadioGroup>
                <RadioGroup name="batch" label="Batch" orientation="horizontal" size="sm" isRequired >
                    <CustomRadio value="S21">
                        S21
                    </CustomRadio>
                    <CustomRadio value="S22">
                        S22
                    </CustomRadio>
                    <CustomRadio value="S23">
                        S23
                    </CustomRadio>
                </RadioGroup>
                <Button className="w-full max-w-md flex justify-center items-center" type="submit" color="primary" isLoading={loading}><FileDownIcon />Download</Button>
            </form>
        </div>
    );
}

export default ExperimentForm;