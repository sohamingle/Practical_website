import React ,{useState}from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
import useCountdown from './useCountdown'

export default function Form(props) {

    const {secondsLeft,start} = useCountdown()
    const [timerMessage,setTimerMessage] = useState(false)
    const [formData,setFormData] = useState({
        name:'',
        roll_no:'',
        class:'',
        batch:'',
        experiment:props.experimentNo
    })

    function handleChange(e){
        const Name = e.target.name
        const val = e.target.value
        setFormData(form =>{
            return{
            ...form,
            [Name]:val
        }})
    }

    const handleSubmit=  (e)=>{
        e.preventDefault()
       
        axios.post('https://practical-backend-h29g.onrender.com/api',formData).then(res => console.log(res))
        
        axios({
            url:`https://practical-backend-h29g.onrender.com/download`,
            method:'GET',
            responseType:'blob',
            cache:'no-store'
        }).then((res)=>{
            fileDownload(res.data,`${formData.name}_${formData.experiment}.docx`)
        })
        setTimerMessage(prev => !prev)
        start(5)
    }
    

    const message = secondsLeft ===0 ? <><p className='message'>Check your downloads</p><p className="message">***Refresh if not working***</p></> : <p className='message'>Download will start in {secondsLeft} seconds</p>



  return (
    <>
    <form>
                <label>Name: </label>
                <input 
                type='text' 
                name='name'
                placeholder='Enter Name'
                value={formData.name}
                onChange={handleChange}
                required={true}
                className='form--text--name'
                />
                <br/>
                <label>Roll No. : </label>
                <input 
                type='number' 
                name='roll_no'
                placeholder='Eg.33'
                value={formData.roll_no}
                onChange={handleChange}
                required={true}
                className='form--text'
                />
                <br/>
                <br/>
                <input 
                type="radio" 
                name="class" 
                id="et1"
                value='Et-1'
                checked={formData.class === 'Et-1'}
                onChange={handleChange}
                className='form--radio'
                required={true}
                />
                <label>Et-1</label>
                <input 
                type="radio" 
                name="class" 
                id="et2"
                value='Et-2'
                checked={formData.class === 'Et-2'}
                onChange={handleChange}
                required={true}
                className='form--radio'
                />
                <label>Et-2</label>
                <br />
                <br />
                <input 
                type="radio" 
                name="batch" 
                id="S21"
                value='S21'
                checked={formData.batch === 'S21'}
                onChange={handleChange}
                required={true}
                className='form--radio'

                />
                <label>S21</label>
                <input 
                type="radio" 
                name="batch" 
                id="S22"
                value='S22'
                checked={formData.batch === 'S22'}
                onChange={handleChange}
                required={true}
                className='form--radio'
                />
                <label>S22</label>
                <input 
                type="radio" 
                name="batch" 
                id="S23"
                value='S23'
                checked={formData.batch === 'S23'}
                onChange={handleChange}
                required={true}
                className='form--radio'
                />
                <label>S23</label>
                <br />
                {!timerMessage && <button className='form--button' onClick={handleSubmit}>Submit</button>}
                {timerMessage && message}
                </form>
        </>
  )
}
