
import React from 'react';

import {getJokes} from '../services/jokeService'
import Table from '../components/Table';
import Navbar from'../components/Navbar'



const Jokes = async ()=> {
    const {data} = await getJokes()
    return (
        <>
        <Navbar/>
        <Table data={data} />
        </>
    );
}

export default Jokes;