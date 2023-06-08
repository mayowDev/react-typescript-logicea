'use client'
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import Input from '../Input/input'
 
function Form(props:any) {
    const {onFormSubmit, data} = props
    const router = useRouter()
    const [jokeData,setJoke] = useState(
        data?data:
        {Title: '', Author:"", Views: 0, CreatedAt:Date.now() }
        );

    const handleInputChange = (e:any)=>{
        setJoke({
          ...jokeData,
          [e.target.name]: e.target.value
        });
    }

    const handleFormSubmit =  (e:any)=>{
        e.preventDefault()
        onFormSubmit(jokeData)
        router.push('/')
    }

    

    return (
        <form method='post'>
            <Input name="Title" label="Title" onChange={handleInputChange} value={jokeData.Title}/>
             <Input name="Author" label="Author" onChange={handleInputChange} value={jokeData.Author}/>
             <Input name="Views" label="Views" onChange={handleInputChange} value={jokeData.Views}/>
             <button className='button' onClick={handleFormSubmit}>Save Joke</button>
        </form>
    );
}

export default Form;