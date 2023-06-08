'use client'
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import Input from '../Input/input'
import Button from '../Button/Button'
 import './style.scss'

 function Form(props:any) {
    const {onFormSubmit, data, handleDeleteJoke} = props
    const router = useRouter()
    const [jokeData,setJoke] = useState(
        data?data:
        {Title: '', Author:"", Views:'', CreatedAt:Date.now() }
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
    const handleDelete =  ()=>{
        handleDeleteJoke(jokeData.id)
        router.push('/')
    }

    

    return (
        <form method='post' className='form'>
            <Input name="Title" label="Title" onChange={handleInputChange} value={jokeData.Title}/>
             <Input name="Author" label="Author" onChange={handleInputChange} value={jokeData.Author}/>
             <Input name="Views" label="Views" onChange={handleInputChange} value={jokeData.Views}/>
             <section className='button-container'>
             <Button
                onClick={handleFormSubmit}
                className='save-button'
                text='Save Joke'
             />
             {data&&
             <Button onClick={handleDelete} text='Delete' className='delete-button'/>
             
             }
             </section>
        </form>
    );
}

export default Form;