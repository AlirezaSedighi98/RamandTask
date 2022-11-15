import { Container, Grid, Typography } from '@mui/material'
import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../../action'
import { useSelector } from 'react-redux'

function Items() {

    const dispatch = useDispatch()
    const apiData = useSelector(state => state.data)

    useEffect(() => {
      getData(dispatch)
    }, [])
    

  return (
    <div className='Grid'>
        <Container>
            <Grid container sx={{justifyContent: "center"}} gap={4}>
                { apiData[0] === "Somthing Went Wrong..." ? 
                    <Typography variant='h2' color={'red'}>Somthing Went Wrong...</Typography>
                    :
                    apiData[0]?.map((item,index)=>{
                        return (
                            <Grid key={index} item md={3} sx={{backgroundColor: "rgba(255, 255, 255, 0.7)",cursor: "pointer", borderRadius: "5px",padding: "20px"}}>
                                
                                <Typography variant='h6' sx={{fontSize: "15px"}}>{item.title}</Typography>
                                <div style={{height: "2px" ,width: "100%", margin: "10px 0px" , backgroundColor: "black"}}></div>
                                <Typography variant='h6' sx={{fontSize: "15px"}}>{item.body}</Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    </div>
  )
}

export default Items