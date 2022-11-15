import { Button, Container, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {InputAdornment} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(false)
    const [info, setInfo] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()

  return (
    <div className='Login'>
        <Container maxWidth={false} sx={{backgroundColor: "rgba(255, 255, 255, 0.7)", width: { md: "30%", xs: "80%"}, borderRadius: "10px"}} style={{padding: "40px 60px"}}>
            <Typography variant='h3' sx={{textAlign: "center", marginBottom: "20px"}}>Welcome</Typography>
            {error && <Typography variant='h5' color={'red'} sx={{textAlign: "center", marginBottom: "20px"}}>Please Fill The Form</Typography>}
            <form 
                style={{display: "flex" , flexDirection: "column"}}
                onSubmit={(e)=>{
                    if((info.password && info.username) !== ""){
                        setError(false)
                        
                    }else{
                        setError(true)
                        e.preventDefault()
                    }
                }}
            >
                <TextField variant='outlined' label={"Username"} sx={{width: "100%", marginBottom: "20px"}} type='text' value={info.username}
                    onChange={(e)=>setInfo(prev=>({...prev, username: e.target.value}))}
                />
                <TextField variant='outlined' label={"Password"} sx={{width: "100%", marginBottom: "40px"}} type={ showPassword ? 'text' : 'password'} value={info.password}
                    InputProps={{endAdornment: (
                        <InputAdornment onClick={()=>setShowPassword(!showPassword)} sx={{cursor: "pointer"}} position="start">
                          { showPassword ? <Visibility/> : <VisibilityOff/>}
                        </InputAdornment>
                    )}}
                    onChange={(e)=>{setInfo(prev=>({...prev, password: e.target.value}))}}
                />
                <Button 
                    onClick={()=>{
                        if((info.password && info.username) !== ""){
                            localStorage.setItem("info", JSON.stringify(info))
                        }else{
                            
                        }
                    }}
                    type='submit' 
                    variant='contained' 
                    disableElevation
                >
                    Login
                </Button>
            </form>
        </Container>
    </div>
  )
}

export default Login