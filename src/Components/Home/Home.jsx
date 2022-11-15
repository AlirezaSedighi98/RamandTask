import React from 'react'
import Header from './Header'
import Items from './Items'
import { useState } from 'react'

function Home() {

    const [searche, setSearche] = useState("")
    
    
  return (
    <div>
        <Header searche={searche} setSearche={setSearche}/>
        <Items searche={searche}/>
    </div>
  )
}

export default Home