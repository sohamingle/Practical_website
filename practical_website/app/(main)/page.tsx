import SubjectCard from "@/components/subject-card"
import DVLSI from "@/public/logo/dvlsi.png"
import DCOM from "@/public/logo/dcom.png"
import DTSP from "@/public/logo/dtsp.png"

function Home() {

  return (
    <div className="p-5">
      <div className="text-xl font-bold mb-5">Select Practical</div>
      <div className='grid gap-3 md:grid-cols-2'>
        <SubjectCard subjectName={"Digital Very Large Scale Integration"} subjectLogo={DVLSI} link={"dvlsi"} subjectClass={"T.E. EXTC SEM V"}/>
        <SubjectCard subjectName={"Digital Communication"} subjectLogo={DCOM} link={"dcom"} subjectClass={"T.E. EXTC SEM V"}/>
        <SubjectCard subjectName={"Discrete Time Signal Processing"} subjectLogo={DTSP} link={"dvlsi"} subjectClass={"T.E. EXTC SEM V"}/>
      </div>
    </div>
  )
}

export default Home