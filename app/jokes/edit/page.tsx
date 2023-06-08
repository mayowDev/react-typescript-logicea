'use client';
import React from 'react';
import { saveJoke } from '../../services/jokeService'

import Form from '../../components/Form/Form'

export default  function page() {
    const handleSubmit = async (jokeData:any)=>{
        const result = await saveJoke(jokeData)
        return result
    }
    return (
            <Form onFormSubmit={handleSubmit} />
    );
}



