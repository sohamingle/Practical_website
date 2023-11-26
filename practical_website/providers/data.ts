interface Experiment {
    name: string;
    value: string;
}

interface ExperimentData {
    [key: string]: Experiment[];
    dcom: Experiment[];
    dtsp: Experiment[];
    dvlsi: Experiment[];
}

export const data:ExperimentData = {
    dcom:[{name:"Experiment 1",value:"dcom_exp1"}],
    dtsp:[
        {
            name:"Experiment 1",
            value:"dtsp_exp1",
        },
        {
            name:"Experiment 2",
            value:"dtsp_exp2",
        },
        {
            name:"Experiment 3",
            value:"dtsp_exp3",
        },
        {
            name:"Experiment 4",
            value:"dtsp_exp4",
        },
        {
            name:"Experiment 5",
            value:"dtsp_exp5",
        },
        {
            name:"Experiment 7",
            value:"dtsp_exp7",
        },
        {
            name:"Experiment 8",
            value:"dtsp_exp8",
        },
    ],
    dvlsi:[
        {
            name:"Experiment 2",
            value:"dtsp_exp2",
        },
        {
            name:"Experiment 3",
            value:"dtsp_exp3",
        },
        {
            name:"Experiment 4",
            value:"dtsp_exp4",
        },
        {
            name:"Experiment 5",
            value:"dtsp_exp5",
        },
        {
            name:"Experiment 6",
            value:"dtsp_exp6",
        },
        {
            name:"Experiment 7",
            value:"dtsp_exp7",
        },
        {
            name:"Experiment 8",
            value:"dtsp_exp8",
        },
    ]
}