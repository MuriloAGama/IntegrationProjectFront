import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Modal.css';


function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='bt-MD' onClick={handleOpen}>Fazer uma doação! </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='style'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Faça uma doação
            <a className='iconDonation'><FavoriteBorderIcon style={{ fontSize: 30, color: "red" }} /></a>


          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>Doe para quem precisa e receba nossa moeda para trocar por descontos e cupons!</p>

            <div className='bt-donation'>
              
            <button type="submit" value="doa10" className="btn-doa10">R$ 10 <a className='iconDoa10'><FavoriteBorderIcon style={{ fontSize: 30, color: "red" }} /></a></button >
            <button type="submit" value="doa10" className="btn-doa20">R$ 20<a className='iconDoa20'><FavoriteBorderIcon style={{ fontSize: 30, color: "red" }} /></a></button>
            <button type="submit" value="doa10" className="btn-doa30">R$ 30<a className='iconDoa30'><FavoriteBorderIcon style={{ fontSize: 30, color: "red" }} /></a></button>
            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;