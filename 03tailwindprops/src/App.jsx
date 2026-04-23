import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card.jsx'

function App() {

  return (
    <>
      <h1 className='bg-green-500 p-5 rounded-lg text-black text-center my-5 mx-5'>Tailwind Test</h1>
      <div className='flex flex-row gap-5'>
        <Card name={"Modern Design Solutions"} />
        <Card name={"AI Solutions"} />
        <Card name={"Cloud Solutions"} />
        <Card name={"Cyber Security Solutions"} />
        <Card name={"Data Science Solutions"} />
      </div>
    </>
  )
}

export default App
