import Image from 'next/image'
import Header from './pages/Header'
import Body from './pages/Body'
import React from 'react'
import './App.css'
import './CSS Styles/Header.css'
import './CSS Styles/News.css'




export default function Home() {
  return (
    <>
    <Header></Header>
    <Body></Body>
    </>
  )
}
