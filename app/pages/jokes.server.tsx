
import React from 'react';
import {getJokes, deleteJoke, saveJoke } from '../services/jokeService'
import JokesComponent from './jokes.client';

export default  async function Jokes () {
    const {data} = await getJokes()
    return (
        <>
        <JokesComponent data={data??[]} />
        </>
    );
}
