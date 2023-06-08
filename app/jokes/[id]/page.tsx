'use client'
import {getJoke, deleteJoke, saveJoke } from '../../services/jokeService'
import Form from '../../components/Form/Form'
  
   

  export default async function Page({ params }) {
    const joke = await getJoke(params.id);
    let formData ={
      id: joke?.id,
      Title:  joke?.Title,
      Author:joke?.Author,
      Views: joke?.Views
    }

    const handleSubmit = async (jokeData:any)=>{
      await saveJoke(jokeData)
  }

    return <>
        <h1>Edit Joke  </h1>
        <Form onFormSubmit={handleSubmit} data={formData}/>

    </>;
}