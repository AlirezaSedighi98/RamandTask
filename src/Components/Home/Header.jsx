import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from '@mui/material';
import { useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from 'react'

function Header({searche, setSearche}) {
    
    const user = JSON.parse(localStorage.getItem("info")).username
    const apiData = useSelector(state => state.data)
    const [text, setText] = useState("")

   const qty = apiData[0]?.filter(item=>{
            if (searche === "") {
                
              return item  
            } else {
                return item.body.toLowerCase().includes(searche.toLowerCase()) || item.title.toLowerCase().includes(searche.toLowerCase())
            }
    }).length
    


    
    

  return (
    <div className='Header'>
        <Container style={{padding: "10px 0px", display: "flex", justifyContent: "space-between"}}>
            <Typography component={'span'} variant='h4'>Qty: { apiData[0] === "Somthing Went Wrong..." ? "0" : qty }</Typography>
            <form onSubmit={(e)=>e.preventDefault()} style={{display : "flex", alignItems: "center", gap: "10px"}}>
                <TextField variant='outlined' onChange={(e)=>setText(e.target.value)} value={text} label={"Searche..."}/>
                <IconButton type='submit' onClick={()=>{
                    setSearche(text)}}>
                    <SearchIcon/>
                </IconButton>
            </form>
            
            <div style={{display : "flex", alignItems: "center"}}>
                <Typography component={'span'} variant='h4'>{user}</Typography>
                <IconButton href='/' onClick={()=>{
                    localStorage.clear()
                }}>
                    <LogoutIcon/>
                </IconButton>
            </div>
            
        </Container>   
    </div>
  )
}

export default Header