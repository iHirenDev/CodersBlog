import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #60A0FA',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

function MyCustomModal({ open, handleClose, handleConfirm }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography sx={{fontWeight:'bold', textAlign:'center'}} id="modal-title" variant="h6" component="h2">
          Confirm Deletion
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete this post?
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between'}}>
          <Button sx={{backgroundColor:'red', width:100}} variant="contained" onClick={handleConfirm}>
            Yes
          </Button>
          <Button sx={{backgroundColor:'green', width:100}} variant="contained" onClick={handleClose}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default MyCustomModal;
