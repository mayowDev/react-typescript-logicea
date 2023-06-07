"use client"
import React, {useEffect, useState} from 'react';

import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import { deleteJoke, saveJoke } from '../services/jokeService'
import Table from '../components/Table/Table';

export default  function JokesList ({data}:{data:any}) {
    const [jokes, setjokes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [filteredJokes, setFilteredJokes] = useState(data)

    useEffect(()=>{
        setjokes(data)
    },[data, jokes, setjokes])

    const handleDeleteJoke = (id:number)=> {
        const newJokes =  filteredJokes.filter((itm:any) => itm.id !== id);
        localStorage.setItem('jokes', JSON.stringify(newJokes))//delete from state
        setFilteredJokes(newJokes)
    }
    const paginatedJokes = paginate(filteredJokes, currentPage, pageSize);

    const  handlePageChange = (page:number) => { setCurrentPage(page)};
    return (
        <>
            <Table data={paginatedJokes} />
            <Pagination 
                totalItems={jokes.length} 
                pageSize={pageSize} 
                onPageChange={handlePageChange}
                setPageSize={setPageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
}