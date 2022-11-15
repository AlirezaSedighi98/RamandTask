import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from '@mui/material';

function Header() {
    
    const user = JSON.parse(localStorage.getItem("info")).username

  return (
    <div className='Header'>
        <Container style={{padding: "10px 0px", display: "flex", justifyContent: "space-between"}}>
            <Typography component={'span'} variant='h4'>Qty: {'0'}</Typography>
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