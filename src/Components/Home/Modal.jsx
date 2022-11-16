import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function AlertDialog({modal, setModal,modalData}) {
  
    
  const [text, setText] = useState(modalData.text)
  const dispatch = useDispatch()


  useEffect(() => {
    setText(modalData.text)
  }, [modalData])
  

  return (
    <div>
      <Dialog
        open={modal}
        onClose={()=>setModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          {"Customize The Body:"}
        </DialogTitle>
        <DialogContent>
          <TextField
          id="outlined-textarea"
          label="Content Body"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          multiline
          sx={{marginTop : "10px"}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setModal(false)}>Discard</Button>
          <Button onClick={()=>{
            dispatch({type: "updateContent", payload: text, id: modalData.id})
            setModal(false)
          }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}