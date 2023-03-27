import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Spinner from '../Spinner/Spinner';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function AuthorModal({ open, setOpen, userModal, isModalLoading }) {

  const handleModalClose = () => {
    setOpen(false);
  }

  const content = <>
    <Typography variant="h6" component="h2">
      {userModal?.name}
    </Typography>

    <Typography marginTop={2}>
      {userModal?.address}
    </Typography>

    <Typography marginTop={2}>
      {userModal?.email}
    </Typography>

    <Typography marginTop={2}>
      {userModal?.phone}
    </Typography>
    </>

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {isModalLoading ? <Spinner /> : content}
      </Box>
    </Modal>
  );
}