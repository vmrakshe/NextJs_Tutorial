'use client'//to use as client side rendering
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'// for redirective to other pages without link 

const NotFoundPage = () => {

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/'); // Redirect to the home page after 3 seconds
    }, 3000);

    console.log('useEffect ran');

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [router]);  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', }}>
      <h1>Oooooops....</h1>
      <p>This Page not found</p>
      <Link style={{color:'blue'}} href="/">Go to Homepage</Link>
    </div>
  )
}

export default NotFoundPage
