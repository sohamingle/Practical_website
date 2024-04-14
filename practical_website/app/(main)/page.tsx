import SubjectCard from "@/components/subject-card"
import { subjects_data } from "@/providers/data"

function Home() {

  return (
    <div className="p-5">
      <div className="text-xl font-bold mb-5">Select Practical</div>
      <div className='grid gap-3 md:grid-cols-2'>
        {subjects_data.slice().reverse().map(subject => (
          <SubjectCard key={subject.subjectName} subjectName={subject.subjectName} subjectLogo={subject.subjectLogo} link={subject.link} subjectClass={subject.subjectClass}/>
        ))}
      </div>
    </div>
  )
}

export default Home