'use client'
import {getJoke, deleteJoke, saveJoke } from '../../services/jokeService'
import Form from '../../components/Form/Form'  
   

  export default async function Page({ params }:{params:any}) {
    const joke = await getJoke(params.id);
    if(joke?.id === undefined) return <h1 className='form-title'>404 - Item not found</h1>
    
    let formData ={
      id: joke?.id,
      Title:  joke?.Title,
      Author:joke?.Author,
      Views: joke?.Views,
      CreatedAt:Date.now()
    }

    const handleSubmit = async (jokeData:any)=>{
      await saveJoke(jokeData)
    }

    const handleDeleteJoke =  async()=> {
       await deleteJoke(params.id)
    }

    return <>
        <h2 className='form-title'>Edit Joke</h2>
        <Form onFormSubmit={handleSubmit} data={formData} handleDeleteJoke={handleDeleteJoke}/>
        

    </>;
}