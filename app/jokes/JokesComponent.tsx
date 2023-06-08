"use client"
import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie'

import { useRouter } from 'next/navigation';
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';

export default  function JokesList ({data}:{data:any}) {
    const router =  useRouter()
    const [jokes, setjokes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [filteredJokes, setFilteredJokes] = useState(data)
    const [user, setUser] = useState('')


    useEffect(()=>{
       const token =  Cookies.get('token')
        setjokes(data)
        setUser(token)
    },[data, jokes, setjokes, user])
  
    const paginatedJokes = paginate(filteredJokes, currentPage, pageSize);

    const  handlePageChange = (page:number) => { setCurrentPage(page)};
    const handleLogout =  ()=>{
        Cookies.remove('token');
        router.replace('/login')
    }
    return (
        <>
            {user&&<Button onClick={handleLogout} text='Logout' className='logout-button'/>}
            <Table data={paginatedJokes} />
            <Pagination 
                totalItems={jokes.length} 
                pageSize={pageSize} 
                onPageChange={handlePageChange}
                setPageSize={setPageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Button
                 onClick={()=>router.push('/jokes/edit')}
                 text=' Add joke  '
                 className='add-new-button'
            />
        </>
    );
}