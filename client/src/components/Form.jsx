import React ,{useState}from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'

export default function Form(props) {

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

        downloadFile()
    }
    
    function downloadFile(){
        
            axios({
                url:'https://practical-backend-h29g.onrender.com/download',
                method:'GET',
                responseType:'blob'
            }).then((res)=>{
                fileDownload(res.data,`${formData.name}_${formData.experiment}.docx`)
            })

    }



  return (
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
                <button className='form--button' onClick={handleSubmit}>Submit</button>
                </form>
  )
}
