import React from 'react'
import { useState } from 'react'
import DTSP from '../subjects/DTSP'
import DCOM from '../subjects/DCOM'
import DVLSI from '../subjects/DVLSI'

function Subject() {
  const [subjectToken , setSubjectToken] = useState(false)
  const [selectedSubject,setSelectedSubject] = useState('')
  const subject = 
      <>
      <div className="subject--container">
      <div className='logo--container' >
        <img onClick={()=>handleClick('DVLSI')} src="/logo/dvlsi.png" className="logo--dvlsi" />
      </div>
      <div className='logo--container'>
        <img onClick={()=>handleClick('DCOM')} src="/logo/dcom.png" className="logo--dcom" />
      </div>
      <div className='logo--container'>
        <img onClick={()=>handleClick('DTSP')} src="/logo/dtsp.png" className="logo--dtsp" />
      </div>
      </div>
      </>

  function handleClick(e) {
    setSubjectToken(token => !token)
    setSelectedSubject(e)
  }

  const handleRefreshClick = () => {
    window.location.reload();
  };

  let htmlSelectedSubject
  if(selectedSubject == 'DTSP'){
    htmlSelectedSubject = <>
                        <div className="back" onClick={handleRefreshClick}>Back</div>
                        <DTSP/>
                        </>
  }else if(selectedSubject == 'DCOM'){
    htmlSelectedSubject = <>
                        <div className="back" onClick={handleRefreshClick}>Back</div>
                        <DCOM/>
                        </>
  }else if(selectedSubject == 'DVLSI'){
    htmlSelectedSubject = <>
                        <div className="back" onClick={handleRefreshClick}>Back</div>
                        <DVLSI/>
                        </>
  }

  return (
    <>
    <div className="subject--title">Select Practical</div>
    <div className='subject--grid'>
    {subjectToken ? htmlSelectedSubject : subject}
    </div>
    </>
  )
}

export default Subject