import { Container, Grid, Typography,Pagination } from '@mui/material'
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../../action'
import { useSelector } from 'react-redux'

function Items({searche}) {

    const dispatch = useDispatch()
    const apiData = useSelector(state => state.data)

    useEffect(() => {
      getData(dispatch)
    }, [dispatch])
    

  return (
    <div className='Grid'>
        <Container>
            <Grid container sx={{justifyContent: "center"}} gap={4}>
                { apiData[0] === "Somthing Went Wrong..." ? 
                    <Typography variant='h2' color={'red'}>Somthing Went Wrong...</Typography>
                    :
                    apiData[0]?.filter(item=>{
                        if (searche === "") {
                            
                          return item  
                        } else {
                            return item.body.toLowerCase().includes(searche.toLowerCase()) || item.title.toLowerCase().includes(searche.toLowerCase())
                        }
                    })?.map((item,index)=>{
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
            <div style={{display: "flex" , justifyContent: "center", margin: "50px"}}>
                <div style={{backgroundColor: "white", borderRadius: "3px", padding: "10px"}}>
                    <Pagination color='primary' count={10} variant="outlined" shape="rounded" />
                </div>
                
            </div> 
        </Container>
    </div>
  )
}

export default Items