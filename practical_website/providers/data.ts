import DVLSI from "@/public/logo/dvlsi.png"
import DCOM from "@/public/logo/dcom.png"
import DTSP from "@/public/logo/dtsp.png"
import LINUX from "@/public/logo/linux.webp"
interface Experiment {
    name: string;
    value: string;
}

interface ExperimentData {
    [key: string]: Experiment[];
    dcom: Experiment[];
    dtsp: Experiment[];
    dvlsi: Experiment[];
    linux: Experiment[];
}

export const subjects_data = [
    {
        subjectName: "Digital Very Large Scale Integration",
        subjectLogo: DVLSI,
        link: "dvlsi",
        subjectClass: "T.E. EXTC SEM V"
    },
    {
        subjectName: "Digital Communication",
        subjectLogo: DCOM,
        link: "dcom",
        subjectClass: "T.E. EXTC SEM V"
    },
    {
        subjectName: "Discrete Time Signal Processing",
        subjectLogo: DTSP,
        link: "dtsp",
        subjectClass: "T.E. EXTC SEM V"
    },
    {
        subjectName: "Skill Lab - Linux",
        subjectLogo: LINUX,
        link: "linux",
        subjectClass: "T.E. EXTC SEM VI"
    },
]

export const data: ExperimentData = {
    dcom: [
        {
            name: "Experiment 1",
            value: "dcom_exp1"
        }
    ],
    dtsp: [
        {
            name: "Experiment 1",
            value: "dtsp_exp1",
        },
        {
            name: "Experiment 2",
            value: "dtsp_exp2",
        },
        {
            name: "Experiment 3",
            value: "dtsp_exp3",
        },
        {
            name: "Experiment 4",
            value: "dtsp_exp4",
        },
        {
            name: "Experiment 5",
            value: "dtsp_exp5",
        },
        {
            name: "Experiment 7",
            value: "dtsp_exp7",
        },
        {
            name: "Experiment 8",
            value: "dtsp_exp8",
        },
    ],
    dvlsi: [
        {
            name: "Experiment 2",
            value: "dvlsi_exp2",
        },
        {
            name: "Experiment 3",
            value: "dvlsi_exp3",
        },
        {
            name: "Experiment 4",
            value: "dvlsi_exp4",
        },
        {
            name: "Experiment 5",
            value: "dvlsi_exp5",
        },
        {
            name: "Experiment 6",
            value: "dvlsi_exp6",
        },
        {
            name: "Experiment 7",
            value: "dvlsi_exp7",
        },
        {
            name: "Experiment 8",
            value: "dvlsi_exp8",
        },
    ],
    linux:[
        {
            name: "Experiment 1",
            value: "linux_exp1",
        },
        {
            name: "Experiment 2",
            value: "linux_exp2",
        },
        {
            name: "Experiment 3",
            value: "linux_exp3",
        },
        {
            name: "Experiment 4",
            value: "linux_exp4",
        },
        {
            name: "Experiment 5",
            value: "linux_exp5",
        },
        {
            name: "Experiment 6",
            value: "linux_exp6",
        },
        {
            name: "Experiment 7",
            value: "linux_exp7",
        },
        {
            name: "Experiment 8",
            value: "linux_exp8",
        },
        {
            name: "Experiment 9",
            value: "linux_exp9",
        },
        {
            name: "Experiment 10",
            value: "linux_exp10",
        },
        {
            name: "Experiment 11",
            value: "linux_exp11",
        },
    ]
}