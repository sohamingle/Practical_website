import React, { useState } from 'react'
import Form from '../components/Form'

function DTSP() {

    const [formToken,setFormToken] = useState(false)
    const [experimentNo,setExperimentNo] = useState('')
    
    let exp
    function handleClick(e){
        setFormToken(token => !token)
        setExperimentNo(e)
    }

    const experiments =<>
    <div className='experiment--holder'>
    <div onClick={()=>handleClick('dtsp_exp1')} className='experiments'>experiment 1</div>
    <div onClick={()=>handleClick('dtsp_exp2')} className='experiments'>experiment 2</div>
    <div onClick={()=>handleClick('dtsp_exp3')} className='experiments'>experiment 3</div>
    </div>
    </>


  return (
   formToken ?  <Form experimentNo={experimentNo}/> : experiments
   
  )
}

export default DTSP