'use client';
import React from 'react';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';

import Button from '../components/Button/Button';

export default  function page() {
    const router = useRouter()

    const handleLogin =  ()=>{
         Cookies.set('token', 'true');
        router.replace('/')
    }
   
    return (
        <>
        <h2 className='form-title'>Login </h2>
        <section className='button-container'>
             <Button onClick={handleLogin} text={'Login'} className="save-button"/>
        </section>
        </>
           
    );
}
