'use server'
import Image from 'next/image'
import Header from './Components/Header'
import Body from './Main page/Body'
import React from 'react'
import './App.css'
import './Components/CSS Styles/Media_requests.css'




export default async function Home() {
  
  // const res = await fetch('http://localhost:1337/api/auto-marks?populate=*')
  //   const res2 = await res.json()


  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data')
  //   }

  return (
    <>
   <Header ></Header>
      <Body></Body> 
    </>
  )
}
