import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from '@mui/material';
import { useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    
    const user = JSON.parse(localStorage.getItem("info")).username
    const apiData = useSelector(state => state.data)

  return (
    <div className='Header'>
        <Container style={{padding: "10px 0px", display: "flex", justifyContent: "space-between"}}>
            <Typography component={'span'} variant='h4'>Qty: { apiData[0] === "Somthing Went Wrong..." ? "0" : apiData[0]?.length }</Typography>
            <form onSubmit={(e)=>e.preventDefault()} style={{display : "flex", alignItems: "center", gap: "10px"}}>
                <TextField variant='outlined' label={"Searche..."}/>
                <IconButton>
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